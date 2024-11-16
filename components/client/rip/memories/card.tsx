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
      <div className="flex items-start">
        <div className="">
          <Image
            src={src}
            alt={`${alt}`}
            className="object-cover h-[14rem] w-[150rem]"
          />
        </div>
        <CardBody placeholder="">
          <h5 color="blue-gray" className="-mt-5 font-extrabold text-lg">
            {title}
          </h5>
          <p>{description}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default MemoriesCard;
