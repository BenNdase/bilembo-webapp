"use client";
import { Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

export type Props = {
  className?: string;
  content: string;
  name: string;
  detail: string;
  avatar: any;
};

const TestimonialCard: React.FC<Props> = ({
  avatar,
  className,
  content,
  detail,
  name,
}) => {
  return (
    <Card
      placeholder=""
      color="transparent"
      shadow={false}
      className="w-full max-w-[28rem] flex flex-col items-center justify-center"
    >
      <CardBody placeholder="" className="mb-6 p-0">
        <p className="text-center">{content}</p>
      </CardBody>
      <div className="mx-0 flex items-center gap-4 pt-0 pb-4">
        <Image
          src={avatar}
          alt={name}
          className="w-[4rem] h-[4rem] rounded-full"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="font-extrabold">{name}</h5>
          </div>
          <p className="text-sm">{detail}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
