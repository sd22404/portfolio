"use client";

import { useEffect, useRef } from "react";

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const canvasEl = canvas;
        const containerEl = container;
        const context = ctx;

        const css = getComputedStyle(document.documentElement);
        const colour = css.getPropertyValue("--accent").trim() || "#89b4fa";

        // CONFIG
        const baseAlpha = 0.1;
        const RUN_DURATION_MS = 27000;
        const FADE_OUT_MS = 3000;
        let start = performance.now();
        let last = performance.now();
        let stopped = false;
        let raf = 0;
        const FPS = 10;
        let interval = 1000 / FPS;

        let cols = 0;
        let rows = 0;
        let cellSize = 8;
    
        let current: Uint8Array = new Uint8Array(0);
        let next: Uint8Array = new Uint8Array(0);

        let xL: Uint16Array = new Uint16Array(0);
        let xR: Uint16Array = new Uint16Array(0);
        let yU: Uint16Array = new Uint16Array(0);
        let yD: Uint16Array = new Uint16Array(0);

        const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

        function createGrid(width: number, height: number) {
            cellSize = Math.max(4, Math.floor(width / 100));
            cols = Math.max(10, Math.floor(width / cellSize));
            rows = Math.max(10, Math.floor(height / cellSize));
            const len = cols * rows;
            current = new Uint8Array(len);
            next = new Uint8Array(len);
            // Seed with random live cells
            for (let i = 0; i < len; i++) current[i] = Math.random() < 0.1 ? 1 : 0;

            // Precompute wrap indices for neighbors
            xL = new Uint16Array(cols);
            xR = new Uint16Array(cols);
            for (let x = 0; x < cols; x++) {
                xL[x] = (x + cols - 1) % cols;
                xR[x] = (x + 1) % cols;
            }
            yU = new Uint16Array(rows);
            yD = new Uint16Array(rows);
            for (let y = 0; y < rows; y++) {
                yU[y] = (y + rows - 1) % rows;
                yD[y] = (y + 1) % rows;
            }
        }

        function resize() {
            const rect = containerEl.getBoundingClientRect();
            const width = Math.max(1, Math.floor(rect.width));
            const height = Math.max(1, Math.floor(rect.height));
            
            canvasEl.width = Math.floor(width * dpr);
            canvasEl.height = Math.floor(height * dpr);
            
            canvasEl.style.width = `${width}px`;
            canvasEl.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            createGrid(width, height);

            startLoop();
        }

        function index(x: number, y: number) {
            return y * cols + x;
        }

        function stepInPlace() {
            // Compute next from current using precomputed wrap indices (no % in hot loop)
            for (let y = 0; y < rows; y++) {
                const yu = yU[y];
                const yd = yD[y];
                for (let x = 0; x < cols; x++) {
                    const xl = xL[x];
                    const xr = xR[x];
                    const idx = index(x, y);
                    let n = 0;
                    n += current[index(xl, yu)];
                    n += current[index(x,  yu)];
                    n += current[index(xr, yu)];
                    n += current[index(xl, y )];
                    n += current[index(xr, y )];
                    n += current[index(xl, yd)];
                    n += current[index(x,  yd)];
                    n += current[index(xr, yd)];

                    const alive = current[idx] === 1;
                    // Conway rules
                    next[idx] = (alive && (n === 2 || n === 3)) || (!alive && n === 3) ? 1 : 0;
                }
            }
            // Swap buffers
            [current, next] = [next, current];
        }

        function draw() {
            const width = canvasEl.width / dpr;
            const height = canvasEl.height / dpr;
            context.clearRect(0, 0, width, height);
            
            context.imageSmoothingEnabled = false;
            context.globalAlpha = baseAlpha;
            context.fillStyle = colour;
            context.beginPath();
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    if (current[index(x, y)] === 1) {
                        context.roundRect(x * cellSize, y * cellSize, cellSize, cellSize, 5);
                    }
                }
            }
            context.fill();
            context.globalAlpha = 1;
        }

        function stopLoop() {
            if (stopped) return;
            stopped = true;
            if (raf) cancelAnimationFrame(raf);
            raf = 0;
        }

        function startLoop() {
            // reset animation
            if (!stopped) return;
            start = performance.now();
            last = performance.now();
            interval = 1000 / FPS;
            stopped = false;
            if (raf > 0) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(loop);
        }

        function loop(now: number) {
            raf = requestAnimationFrame(loop);

            // stop after duration
            const elapsed = now - start;
            if (elapsed >= RUN_DURATION_MS) {
                if (elapsed >= RUN_DURATION_MS + FADE_OUT_MS) {
                    stopLoop();
                    return;
                } else {
                    interval = (1000 / FPS) / Math.max(0.1, 1 - (elapsed - RUN_DURATION_MS) / FADE_OUT_MS);
                }
            }

            if (now - last < interval) return;
            last = now;
            stepInPlace();
            draw();
        }


        resize();

        const ro = new ResizeObserver(() => resize());
        ro.observe(containerEl);

        const onVisibility = () => {
            if (document.hidden) {
                stopLoop();
            } else if(!document.hidden) {
                startLoop();
            }
        };
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 -z-10 pointer-events-none bg-background w-screen h-screen overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
}
