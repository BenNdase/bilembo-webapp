"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Avatar from "../../../assets/avatar.png";
import TestimoniesCard from "../../client/home/testimonies_section/card";

const fadeImages = [
  {
    name: "Kali Tshimanga",
    detail: "Entrepreneur",
    description: `" Kali à Bilembo , j'ai pu conserver les souvenirs de mon père décédé il y a plusieurs années. Les images, les textes et les photos m'ont permis de mieux connaître son histoire et de partager ses souvenirs avec ma famille".`,
    avatar: { Avatar },
  },
  {
    name: "Grace Frimpong",
    detail: "IT chez KoumiShop",
    description: `" Grâce à Bilembo , j'ai pu conserver les souvenirs de mon père décédé il y a plusieurs années. Les images, les textes et les photos m'ont permis de mieux connaître son histoire et de partager ses souvenirs avec ma famille".`,
    avatar: { Avatar },
  },
  {
    name: "Grace Frimpong",
    detail: "IT chez KoumiShop",
    description: `" Grâce à Bilembo , j'ai pu conserver les souvenirs de mon père décédé il y a plusieurs années. Les images, les textes et les photos m'ont permis de mieux connaître son histoire et de partager ses souvenirs avec ma famille".`,
    avatar: { Avatar },
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container lg:hidden">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="p-10">
            <TestimoniesCard
              avatar={Avatar}
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
