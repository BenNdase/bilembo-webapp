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

export function Slide({ images }: Props) {
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
      {images && images.length > 0 ? (
        images.map((image, index) => (
          <Image
            key={index}
            width="1500"
            height="1500"
            className="h-full w-full object-cover"
            src={image}
            alt={`Image ${index}`}
          />
        ))
      ) : (
        <p>Aucune image disponible</p>
      )}
    </Carousel>
  );
}
