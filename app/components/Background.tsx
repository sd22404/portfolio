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
        const colorA = css.getPropertyValue("--accent").trim() || "#89b4fa";
        const colorB = css.getPropertyValue("--accent").trim() || "#cba6f7";
        const singleAccent = colorA === colorB;

        let cols = 0;
        let rows = 0;
        let cellSize = 8;
        let grid: Uint8Array = new Uint8Array(0);

        const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

        function createGrid(width: number, height: number) {
            cellSize = Math.max(4, Math.floor(width / 100));
            cols = Math.max(10, Math.floor(width / cellSize));
            rows = Math.max(10, Math.floor(height / cellSize));
            grid = new Uint8Array(cols * rows);
            for (let i = 0; i < grid.length; i++) {
                grid[i] = Math.random() < 0.1 ? 1 : 0;
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
        }

        function index(x: number, y: number) {
            return y * cols + x;
        }

        function step(prev: Uint8Array) {
            const next = new Uint8Array(prev.length);
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    let n = 0;
                    for (let dy = -1; dy <= 1; dy++) {
                        for (let dx = -1; dx <= 1; dx++) {
                            if (dx === 0 && dy === 0) continue;
                            const nx = (x + dx + cols) % cols;
                            const ny = (y + dy + rows) % rows;
                            n += prev[index(nx, ny)];
                        }
                    }
                    const alive = prev[index(x, y)] === 1;
                    if (alive && (n === 2 || n === 3)) next[index(x, y)] = 1;
                    else if (!alive && n === 3) next[index(x, y)] = 1;
                    else next[index(x, y)] = 0;
                }
            }
            return next;
        }

        function draw(current: Uint8Array) {
            const width = canvasEl.width / dpr;
            const height = canvasEl.height / dpr;
            context.clearRect(0, 0, width, height);

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    if (current[index(x, y)] === 1) {
                        const useA = singleAccent || ((x + y) & 1) === 0;
                        context.fillStyle = useA ? colorA : colorB;
                        // CELL ALPHA
                        context.globalAlpha = 0.05;
                        context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    }
                }
            }
            context.globalAlpha = 1;
        }

        let raf = 0;
        let last = performance.now();
        // FPS
        const interval = 1000 / 10;
        let state: Uint8Array;

        function loop(now: number) {
            raf = requestAnimationFrame(loop);
            if (now - last < interval) return;
            last = now;
            state = step(state);
            draw(state);
        }


        resize();
        state = grid;
        draw(state);
        raf = requestAnimationFrame(loop);

        const ro = new ResizeObserver(() => resize());
        ro.observe(containerEl);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 -z-10 pointer-events-none bg-background w-full h-full overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
}
