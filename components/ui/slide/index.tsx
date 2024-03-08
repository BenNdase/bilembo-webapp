"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Avatar from "../../../assets/avatar.png";
import TestimoniesCard from "../../client/home/testimonies_section/card";
import ImgPrisca from "@/assets/testimony/prisca.jpeg";

const fadeImages = [
  {
    name: "Prisca Makila",
    detail: "CEO at KIM Engineering",
    description: `"Je suis profondément touché par l'initiative de Bilembo. La possibilité de partager les photos, la biographie et les détails de la vie passée de mon père à travers un simple code QR sur sa pierre tombale est véritablement révolutionnaire. Cette belle démarche permet de perpétuer la mémoire de mon père et offre un réconfort inestimable à toute ma famille. Bravo à Bilembo pour cette contribution précieuse à la préservation des souvenirs et à la célébration des vies passées".`,
    avatar: { ImgPrisca },
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container lg:hidden">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="p-10">
            <TestimoniesCard
              avatar={ImgPrisca}
              name={fadeImage.name}
              content={fadeImage.description}
              detail={fadeImage.detail}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
