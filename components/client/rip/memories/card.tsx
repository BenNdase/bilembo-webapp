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
import VideoPlayer from "./videos_player";

export type Props = {
  className?: string;
  src?: string;
  url?: string;
  title: string;
  description: string;
};
const MemoriesCard: React.FC<Props> = ({
  className,
  src,
  url,
  title,
  description,
}) => {
  const memoriesCondition = () => {
    if (src === "" && url) {
      return <VideoPlayer videoURL={`${url}`} />;
    } else if (src !== "") {
      <Image
        src={`${src}`}
        alt={`${title}`}
        className="object-cover w-full object-top h-[17rem] lg:w-[150rem]"
      />;
    }
  };

  return (
    <Card placeholder="" shadow={false} className="mt-6 w-full">
      <div className="lg:flex items-start">
        <div className="">{memoriesCondition()}</div>
        <CardBody placeholder="" className="px-0">
          <h5 color="blue-gray" className="font-extrabold text-lg">
            {title}
          </h5>
          <p className="mt-2">
            <span
              dangerouslySetInnerHTML={{
                __html: description
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\n/g, "<br />")
                  .replace(
                    /!\[(.*?)\]\((.*?)\)/g,
                    '<img alt="$1" src="$2" style="max-width:100%; height:auto;" />'
                  ), // Images au format ![alt](url),
              }}
            />
          </p>
        </CardBody>
      </div>
    </Card>
  );
};

export default MemoriesCard;
