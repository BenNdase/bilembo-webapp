import Image from "next/image";
import React, { PropsWithChildren } from "react";

export type Props = {
  className?: string;
  icon: any;
  title?: string;
  description?: string;
  alt: string;
};

const VisionAndGoalCard: React.FC<Props> = ({
  className,
  icon,
  title,
  description,
  alt,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center px-6 w-2/2 md:w-12/12 md:justify-between md:items-start"
      data-aos="zoom-in"
    >
      <Image src={icon} alt={alt} className="w-1/5 pt-8 pb-2 lg:w-2/12" />
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};

export default VisionAndGoalCard;
