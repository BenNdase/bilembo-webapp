import Image from "next/image";
import React, { PropsWithChildren } from "react";

export type Props = {
  className?: string;
  icon: any;
  title?: string;
  description?: string;
  alt: string;
};

const StepCard: React.FC<Props> = ({
  className,
  icon,
  title,
  description,
  alt,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center px-4 w-2/2 md:w-12/12 md:justify-between md:items-center lg:flex-row lg:items-start lg:gap-6"
      data-aos="fade-up"
    >
      <Image src={icon} alt={alt} className="w-1/5 pt-8 pb-2 lg:w-[6%]" />
      <div className="flex flex-col justify-center items-center md:justify-start md:items-center md:pt-5 lg:items-start lg:pt-10">
        <h3 className="font-bold text-xl text-center lg:text-lg">{title}</h3>
        <p className=" text-center lg:text-left">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
