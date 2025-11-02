"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { MediaItem } from "./ProjectCard";

export default function MediaCarousel({ items = [] as MediaItem[], className = "" }: { items?: MediaItem[], className?: string }) {
  const slides = useMemo(() => items.filter(Boolean), [items]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    if (index >= slides.length) setIndex(0);
  }, [slides.length, index]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  if (!slides.length) return null;

  return (
    <div className={`p-0 ${className}`}>
      <div
        className="relative w-full h-full mx-auto overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Project media carousel"
      >
      {/* Slides */}
      <div
        className="flex h-full items-center transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((item, i) => (
          <div key={i} className="shrink-0 grow-0 basis-full h-full flex items-center justify-center">
            <Slide item={item} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="hover:cursor-pointer absolute left-2 bottom-2 rounded border border-border/80 bg-accent-tertiary/80 backdrop-blur-sm px-3 font-mono text-lg text-background hover:border-accent-tertiary hover:bg-background/80 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="hover:cursor-pointer absolute right-2 bottom-2 rounded border border-border/80 bg-accent-tertiary/80 backdrop-blur-sm px-3 font-mono text-lg text-background hover:border-accent-tertiary hover:bg-background/80 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-2 w-2 rounded-xs border transition-all duration-200 hover:cursor-pointer " +
              (i === index 
                ? "bg-accent-tertiary border-accent-tertiary scale-125" 
                : "bg-background border-border/50 hover:border-accent-tertiary hover:bg-accent-tertiary/20")
            }
          />
        ))}
      </div>
      </div>
    </div>
  );
}

function Slide({ item }: { item: MediaItem }) {
  switch (item.type) {
    case "image":
      return (
        <img
          src={item.src}
          alt={item.alt ?? "Image"}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-contain rounded-md"
        />
      );
    case "video":
      return (
        <video
          controls
          preload="metadata"
          playsInline
          className="block object-contain bg-black rounded-md"
        >
          <source src={item.src} type="video/mp4" />
          Sorry, your browser doesn’t support embedded videos.
        </video>
      );
    case "pdf":
      return (
        <iframe
          src={item.src + "#toolbar=0&navpanes=0&scrollbar=0"}
          title={item.alt ?? "PDF Document"}
          className="block w-full h-full border-0 rounded-md"
        />
      );
    default:
      return null;
  }
}
