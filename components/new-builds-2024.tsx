"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
  DownloadIcon,
} from "lucide-react";

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
];

export default function NewBuilds2024() {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const handlePrevious = () => {
    const currentIndex = images.findIndex(
      (img) => img.id === selectedImage?.id
    );
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex(
      (img) => img.id === selectedImage?.id
    );
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handleDownload = (imageSrc: string, imageName: string) => {
    fetch(imageSrc)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading image:", error));
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">New Builds 2024</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full max-h-[95vh] p-0 bg-background">
              <div className="relative w-full h-full flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <XIcon className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
                <div className="relative w-full h-full max-h-[85vh]">
                  <Image
                    src={selectedImage?.src || ""}
                    alt={selectedImage?.alt || ""}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 bg-background bg-opacity-75">
                  <Button variant="ghost" size="icon" onClick={handlePrevious}>
                    <ChevronLeftIcon className="h-6 w-6" />
                    <span className="sr-only">Previous image</span>
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      selectedImage &&
                      handleDownload(
                        selectedImage.src,
                        `${selectedImage.alt}.png`
                      )
                    }
                  >
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleNext}>
                    <ChevronRightIcon className="h-6 w-6" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          Thank you for everything. Photos by{" "}
          <Link
            href="https://example.com/raf"
            className="underline hover:text-primary"
          >
            Raf
          </Link>{" "}
          and{" "}
          <Link
            href="https://example.com/omar"
            className="underline hover:text-primary"
          >
            Omar
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
