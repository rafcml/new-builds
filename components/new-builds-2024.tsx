"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { id: 0, src: "/images/0.jpg", alt: "Description 1" },
  { id: 2, src: "/images/2.jpg", alt: "Description 3" },
  { id: 3, src: "/images/3.jpg", alt: "Description 4" },
  { id: 4, src: "/images/4.jpg", alt: "Description 5" },
  { id: 5, src: "/images/5.jpg", alt: "Description 6" },
  { id: 6, src: "/images/6.jpg", alt: "Description 7" },
  { id: 7, src: "/images/7.jpg", alt: "Description 8" },
  { id: 8, src: "/images/8.jpg", alt: "Description 9" },
  { id: 9, src: "/images/9.jpg", alt: "Description 10" },
  { id: 10, src: "/images/10.jpg", alt: "Description 11" },
  { id: 11, src: "/images/11.jpg", alt: "Description 12" },
  { id: 12, src: "/images/12.jpg", alt: "Description 13" },
  { id: 13, src: "/images/13.jpg", alt: "Description 14" },
  { id: 14, src: "/images/14.jpg", alt: "Description 15" },
  { id: 15, src: "/images/15.jpg", alt: "Description 16" },
  { id: 16, src: "/images/16.jpg", alt: "Description 17" },
  { id: 17, src: "/images/17.jpg", alt: "Description 18" },
  { id: 18, src: "/images/18.jpg", alt: "Description 19" },
  { id: 19, src: "/images/19.jpg", alt: "Description 20" },
  { id: 20, src: "/images/20.jpg", alt: "Description 21" },
  { id: 21, src: "/images/21.jpg", alt: "Description 22" },
  { id: 22, src: "/images/22.jpg", alt: "Description 23" },
  { id: 23, src: "/images/23.jpg", alt: "Description 24" },
  { id: 24, src: "/images/24.jpg", alt: "Description 25" },
  { id: 25, src: "/images/25.jpg", alt: "Description 26" },
  { id: 26, src: "/images/26.jpg", alt: "Description 27" },
  { id: 27, src: "/images/27.jpg", alt: "Description 28" },
  { id: 28, src: "/images/28.jpg", alt: "Description 29" },
  { id: 29, src: "/images/29.jpg", alt: "Description 30" },
  { id: 30, src: "/images/30.jpg", alt: "Description 31" },
  { id: 31, src: "/images/31.jpg", alt: "Description 32" },
  { id: 32, src: "/images/32.jpg", alt: "Description 33" },
  { id: 33, src: "/images/33.jpg", alt: "Description 34" },
  { id: 34, src: "/images/34.jpg", alt: "Description 35" },
  { id: 35, src: "/images/35.jpg", alt: "Description 36" },
  { id: 36, src: "/images/36.jpg", alt: "Description 37" },
  { id: 37, src: "/images/37.jpg", alt: "Description 38" },
  { id: 38, src: "/images/38.jpg", alt: "Description 39" },
  { id: 39, src: "/images/39.jpg", alt: "Description 40" },
  { id: 40, src: "/images/40.jpg", alt: "Description 41" },
  { id: 41, src: "/images/41.jpg", alt: "Description 42" },
  { id: 42, src: "/images/42.jpg", alt: "Description 43" },
  { id: 43, src: "/images/43.jpg", alt: "Description 44" },
  { id: 44, src: "/images/44.jpg", alt: "Description 45" },
  { id: 45, src: "/images/45.jpg", alt: "Description 46" },
  { id: 46, src: "/images/46.jpg", alt: "Description 47" },
  { id: 47, src: "/images/47.jpg", alt: "Description 48" },
  { id: 48, src: "/images/48.jpg", alt: "Description 49" },
  { id: 49, src: "/images/49.jpg", alt: "Description 50" },
  { id: 50, src: "/images/50.jpg", alt: "Description 51" },
];

export default function NewBuilds2024() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen">
      <h1 className="text-3xl font-bold mb-6">New Builds 2024</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-grow">
        {images.map((image, index) => (
          <LazyLoadedImage key={index} image={image} />
        ))}
      </div>
      <footer className="text-center text-sm text-gray-500 mt-8 py-4">
        Photos taken by{" "}
        <a
          href="https://raf.works"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Raf
        </a>{" "}
        and{" "}
        <a
          href="https://x.com/chaoticdesigned"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Omar
        </a>
        {". "}
        Credits are appreciated.
      </footer>
    </div>
  );
}

function LazyLoadedImage({ image }: { image: ImageItem }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={300}
          height={200}
          objectFit="cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200" />
      )}
    </div>
  );
}
