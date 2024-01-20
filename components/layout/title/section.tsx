import React from "react";

export type Props = {
  className?: string;
  title?: string;
  description?: string;
};

const TitleSection: React.FC<Props> = ({ className, title, description }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${className}`}
      data-aos="fade-up"
    >
      <p>{description}</p>
      <h2 className="font-extrabold text-2xl">{title}</h2>
    </div>
  );
};

export default TitleSection;
