import Image from "next/image";
import React, { PropsWithChildren } from "react";

export type Props = {
  className?: string;
  icon: any;
  title?: string;
  description?: string;
  alt: string;
};

const AdvantageCard: React.FC<Props> = ({
  className,
  icon,
  title,
  description,
  alt,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center px-10 w-2/2 md:w-5/12 lg:w-3/12 lg:mt-8"
      data-aos="zoom-in"
    >
      <Image src={icon} alt={alt} className="w-1/5 pt-8 pb-2" />
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
