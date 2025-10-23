"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { MediaItem } from "./ProjectCard";
import Card from "./ui/Card";

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
    <Card innerClassName="p-0" outerClassName={`${className}`}>
      <div
        className="relative w-full mx-auto max-w-4xl h-full overflow-hidden"
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
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 px-2 py-1 text-foreground hover:bg-background"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 px-2 py-1 text-foreground hover:bg-background"
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
              "h-2 w-2 rounded-full border border-border " +
              (i === index ? "bg-accent" : "bg-background")
            }
          />
        ))}
      </div>
      </div>
    </Card>
  );
}

function Slide({ item }: { item: MediaItem }) {
  switch (item.type) {
    case "image":
      return (
        <img
          src={item.src}
          alt={item.alt ?? ""}
          className="block h-full w-auto max-w-full object-contain"
        />
      );
    case "video":
      return (
        <video
          src={item.src}
          controls
          className="block h-full w-auto max-w-full object-contain bg-black rounded-md"
        />
      );
    default:
      return null;
  }
}
