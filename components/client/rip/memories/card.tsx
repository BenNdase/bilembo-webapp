"use client";

import Image from "next/image";
import React, { PropsWithChildren } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export type Props = {
  className?: string;
  src: any;
  title: string;
  description: string;
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
    <Card placeholder="" shadow={false} className="mt-6 w-full">
      <div className="lg:flex items-start">
        <div className="">
          <Image
            src={src}
            alt={`${alt}`}
            className="object-cover w-full object-top h-[17rem] lg:w-[150rem]"
          />
        </div>
        <CardBody placeholder="" className="px-0">
          <h5 color="blue-gray" className="font-extrabold text-lg">
            {title}
          </h5>
          <p className="mt-2">{description}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default MemoriesCard;
