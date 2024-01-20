import Image from "next/image";
import React, { PropsWithChildren } from "react";

export type Props = {
  className?: string;
  src: any;
  title: string;
  description: string;
  alt: string;
  details: string;
};

const TestimoniesCard: React.FC<Props> = ({
  className,
  src,
  title,
  description,
  alt,
  details,
}) => {
  return (
    <div
      className="flex flex-col lg:px-6 gap-3 justify-center mt-6 w-2/2 lg:w-1/3 md:w-12/12 md:justify-between md:items-start"
      data-aos="zoom-in"
    >
      <p className="">{description}</p>
      <div className="flex gap-4">
        <Image src={src} alt={alt} className="w-1/5 rounded-lg" />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg">{title}</h3>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimoniesCard;
