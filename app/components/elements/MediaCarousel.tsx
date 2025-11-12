"use client";

import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../ui/Button";
import Image from "next/image";
import { MediaItem } from "../../data/projects";

export default function MediaCarousel({ items = [] as MediaItem[], className = "" }: { items?: MediaItem[], className?: string }) {
  const slides = useMemo(() => items.filter(Boolean), [items]);
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!slides.length) return;
    if (index >= slides.length) setIndex(0);
  }, [slides.length, index]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modalOpen) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  if (!slides.length) return null;

  return (
    <div className={`p-0 ${className}`}>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <Slide item={slides[index]} zoomed onImageClick={() => {}} />
        </Modal>
      )}
      <div
        className="relative w-full h-full mx-auto overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label={`Carousel. Slide ${index + 1} of ${slides.length}: ${slides[index].alt || slides[index].type}`}
      >
      <div className="sr-only" aria-live="polite">Slide {index + 1} of {slides.length}</div>
      {/* Slides */}
      <div
        className="flex h-full items-center transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((item, i) => (
          <div key={i} className="relative shrink-0 grow-0 basis-full h-full flex items-center justify-center">
            <Slide item={item} onImageClick={() => setModalOpen(true)} />
          </div>
        ))}
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={prev}
            className="hover:cursor-pointer absolute left-2 bottom-2 rounded border border-border/80 bg-accent/80 backdrop-blur-sm px-3 font-mono text-lg text-background hover:border-accent hover:bg-background/80 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="hover:cursor-pointer absolute right-2 bottom-2 rounded border border-border/80 bg-accent/80 backdrop-blur-sm px-3 font-mono text-lg text-background hover:border-accent hover:bg-background/80 hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary"
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
                    ? "bg-accent border-accent scale-125"
                    : "bg-background border-border/50 hover:border-accent hover:bg-accent/20")
                }
              />
            ))}
          </div>
        </>)}
      </div>
    </div>
  );
}

function Slide({ item, zoomed, onImageClick }: { item: MediaItem, zoomed?: boolean, onImageClick: () => void }) {
  switch (item.type) {
    case "image":
      return (
        <div className="relative w-full h-full min-h-[40vh]">
          <Image
            src={item.src}
            alt={item.alt ?? "Project image"}
            fill
            className={`object-contain rounded-md ${zoomed ? "hover:cursor-zoom-out" : "hover:cursor-zoom-in"}`}
            onClick={() => onImageClick()}
          />
        </div>
      );
    case "video":
      return (
        <video
          controls
          preload="metadata"
          playsInline
          className="block max-h-full max-w-full object-contain bg-black rounded-md"
        >
          <source src={item.src} type="video/mp4" />
          Sorry, your browser doesn’t support embedded videos.
        </video>
      );
    case "preview":
      return (
        <div className="relative w-full h-full min-h-[60vh]">
          <Image
            src={item.src}
            alt={item.alt ?? "Preview image"}
            fill
            className="object-cover object-top rounded-md"
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          <Button
            href={item.full}
            external
            variant="ghost"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            aria-label="Open full preview"
          >
            View
          </Button>
        </div>
      );
    default:
      return null;
  }
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-[min(85vw,1600px)] h-[min(85vh,1200px)] rounded-md p-4 overflow-hidden"
      >
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
