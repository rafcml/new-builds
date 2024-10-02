"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { id: 0, src: "/images/0.jpg", alt: "New Build 0" },
  { id: 1, src: "/images/1.jpg", alt: "New Build 1" },
  { id: 2, src: "/images/2.jpg", alt: "New Build 2" },
  { id: 3, src: "/images/3.jpg", alt: "New Build 3" },
  { id: 4, src: "/images/4.jpg", alt: "New Build 4" },
  { id: 5, src: "/images/5.jpg", alt: "New Build 5" },
  { id: 6, src: "/images/6.jpg", alt: "New Build 6" },
  { id: 7, src: "/images/7.jpg", alt: "New Build 7" },
  { id: 8, src: "/images/8.jpg", alt: "New Build 8" },
  { id: 9, src: "/images/9.jpg", alt: "New Build 9" },
  { id: 10, src: "/images/10.jpg", alt: "New Build 10" },
  { id: 11, src: "/images/11.jpg", alt: "New Build 11" },
  { id: 12, src: "/images/12.jpg", alt: "New Build 12" },
  { id: 13, src: "/images/13.jpg", alt: "New Build 13" },
  { id: 14, src: "/images/14.jpg", alt: "New Build 14" },
  { id: 15, src: "/images/15.jpg", alt: "New Build 15" },
  { id: 16, src: "/images/16.jpg", alt: "New Build 16" },
  { id: 17, src: "/images/17.jpg", alt: "New Build 17" },
  { id: 18, src: "/images/18.jpg", alt: "New Build 18" },
  { id: 19, src: "/images/19.jpg", alt: "New Build 19" },
  { id: 20, src: "/images/20.jpg", alt: "New Build 20" },
  { id: 21, src: "/images/21.jpg", alt: "New Build 21" },
  { id: 22, src: "/images/22.jpg", alt: "New Build 22" },
  { id: 23, src: "/images/23.jpg", alt: "New Build 23" },
  { id: 24, src: "/images/24.jpg", alt: "New Build 24" },
  { id: 25, src: "/images/25.jpg", alt: "New Build 25" },
  { id: 26, src: "/images/26.jpg", alt: "New Build 26" },
  { id: 27, src: "/images/27.jpg", alt: "New Build 27" },
  { id: 28, src: "/images/28.jpg", alt: "New Build 28" },
  { id: 29, src: "/images/29.jpg", alt: "New Build 29" },
  { id: 30, src: "/images/30.jpg", alt: "New Build 30" },
  { id: 31, src: "/images/31.jpg", alt: "New Build 31" },
  { id: 32, src: "/images/32.jpg", alt: "New Build 32" },
  { id: 33, src: "/images/33.jpg", alt: "New Build 33" },
  { id: 34, src: "/images/34.jpg", alt: "New Build 34" },
  { id: 35, src: "/images/35.jpg", alt: "New Build 35" },
  { id: 36, src: "/images/36.jpg", alt: "New Build 36" },
  { id: 37, src: "/images/37.jpg", alt: "New Build 37" },
  { id: 38, src: "/images/38.jpg", alt: "New Build 38" },
  { id: 39, src: "/images/39.jpg", alt: "New Build 39" },
  { id: 40, src: "/images/40.jpg", alt: "New Build 40" },
  { id: 41, src: "/images/41.jpg", alt: "New Build 41" },
  { id: 42, src: "/images/42.jpg", alt: "New Build 42" },
  { id: 43, src: "/images/43.jpg", alt: "New Build 43" },
  { id: 44, src: "/images/44.jpg", alt: "New Build 44" },
  { id: 45, src: "/images/45.jpg", alt: "New Build 45" },
  { id: 46, src: "/images/46.jpg", alt: "New Build 46" },
  { id: 47, src: "/images/47.jpg", alt: "New Build 47" },
  { id: 48, src: "/images/48.jpg", alt: "New Build 48" },
  { id: 49, src: "/images/49.jpg", alt: "New Build 49" },
  { id: 50, src: "/images/50.jpg", alt: "New Build 50" },
  { id: 51, src: "/images/51.jpg", alt: "New Build 51" },
  { id: 52, src: "/images/52.jpg", alt: "New Build 52" },
  { id: 53, src: "/images/53.jpg", alt: "New Build 53" },
];

export default function NewBuilds2024() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePrevious = useCallback(() => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === null
        ? null
        : (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === null ? null : (prevIndex + 1) % images.length
    );
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">New Builds 2024</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <LazyLoadedImage
            key={image.id}
            image={image}
            onClick={() => {
              setSelectedImageIndex(index);
              setIsDialogOpen(true);
            }}
          />
        ))}
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] w-full max-h-[95vh] p-0">
          {selectedImageIndex !== null && (
            <div className="relative w-full h-full">
              <Button
                className="absolute top-2 right-2 z-10"
                onClick={() => setIsDialogOpen(false)}
              >
                <XIcon className="h-4 w-4" />
              </Button>
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                <Button onClick={handlePrevious}>
                  <ChevronLeftIcon className="h-6 w-6" />
                </Button>
                <Button onClick={handleNext}>
                  <ChevronRightIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function LazyLoadedImage({
  image,
  onClick,
}: {
  image: ImageItem;
  onClick: () => void;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref} className="cursor-pointer" onClick={onClick}>
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
