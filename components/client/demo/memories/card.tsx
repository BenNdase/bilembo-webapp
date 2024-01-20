import Image from "next/image";
import React, { PropsWithChildren } from "react";

export type Props = {
  className?: string;
  src: any;
  title?: string;
  description?: string;
  alt: string;
};

const MemoriesCard: React.FC<Props> = ({
  className,
  src,
  title,
  description,
  alt,
}) => {
  return (
    <div
      className="flex flex-col lg:flex-row gap-3 lg:gap-8 justify-center items-center mt-6 w-2/2 md:w-12/12 md:justify-between md:items-start"
      data-aos="zoom-in"
    >
      <Image src={src} alt={alt} className="w-2/2 lg:w-3/12 lg:rounded-lg" />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default MemoriesCard;
