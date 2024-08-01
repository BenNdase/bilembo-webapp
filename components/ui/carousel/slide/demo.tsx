"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import photo1 from "@/assets/demo/Avatar.jpg";
import photo2 from "@/assets/demo/Avatar.jpg";
import photo3 from "@/assets/demo/Avatar.jpg";

export type Props = {
  className?: string;
  images: string[];
};

export function SlideDemo() {
  return (
    <Carousel
      placeholder=""
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        src={photo1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={photo2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={photo3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <Image
        src={photo1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={photo2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={photo3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <Image
        src={photo1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={photo2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={photo3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
