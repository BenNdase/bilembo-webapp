"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export type Props = {
  id?: number;
  className?: string;
  open?: number;
  title?: string;
  description?: string;
};

const Icon: React.FC<Props> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export const AccordionCustomIcon: React.FC<Props> = ({
  title,
  description,
}) => {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        placeholder=""
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4 mt-6"
        data-aos="fade-up"
      >
        <AccordionHeader placeholder="" onClick={() => handleOpen(1)}>
          <p className="lg:text-lg">{title}</p>
        </AccordionHeader>
        <AccordionBody>
          <p className="lg:text-[1rem]">{description}</p>
        </AccordionBody>
      </Accordion>
    </>
  );
};
