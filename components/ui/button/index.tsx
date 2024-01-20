"use client";
import { IButton } from "@/types/base";
import { Button } from "@material-tailwind/react";
import React, { ReactNode } from "react";

export type Props = IButton;

export const ButtonLink: React.FC<Props> = ({
  handleClick,
  title,
  children,
  fullWidth,
  variant,
  className,
  size,
}) => {
  const getVariant = () => {
    if (variant === "contained") {
      return "bg-primary-900 border-2 border-primary-900 text-white hover:bg-transparent hover:border-2 hover:border-primary-900 hover:text-primary-900";
    } else if (variant === "outlined") {
      return "border-2 border-primary-900 text-primary-900 hover:bg-primary-900 bg-transparent hover:text-white";
    } else if (variant === "gradient") {
      return "bg-white border-2 border-white text-primary-900 font-bold hover:bg-transparent hover:border-2 hover:border-white hover:text-white";
    }
  };
  return (
    <Button
      onClick={handleClick}
      className={`rounded-full size-sm border-2 w-full normal-case text-white font-poppins text-base font-semibold md:py-4 lg:py-2 ${className} ${getVariant()}`}
      size={size}
    >
      {title}
      {children}
    </Button>
  );
};
