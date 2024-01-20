import Image from "next/image";
import React from "react";

export type Props = {
  className?: string;
  content?: string;
  name?: string;
  detail?: string;
  avatar: any;
};

const TestimoniesCard: React.FC<Props> = ({
  className,
  content,
  name,
  detail,
  avatar,
}) => {
  return (
    <div
      className="flex flex-col gap-4 bg-white drop-shadow-md py-8 px-4 rounded-md"
      data-aos="zoom-in"
    >
      <p className="text-sm text-center">{content}</p>
      <div className="flex gap-6 justify-center items-start">
        <Image
          src={avatar}
          alt="Temoignanes image"
          className="w-1/5"
          width={200}
          height={200}
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimoniesCard;
