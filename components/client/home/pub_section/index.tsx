"use client";

import { useRouter } from "next/navigation";
import BaseContainer from "../../../layout/container";
import { ButtonLink } from "../../../ui/button";

const PubSection = () => {
  const router = useRouter();

  return (
    <BaseContainer
      className="flex flex-col gap-6 bg-[#272727] py-8 lg:flex-row lg:justify-between lg:py-20"
      data-aos="zoom-in"
    >
      <h2 className="text-white text-2xl font-bold">
        Prêt à essayer de voir un modèle ?
      </h2>
      <ButtonLink
        handleClick={() => router.push("/memorial/demo/biographie")}
        variant="gradient"
        size="sm"
        className="lg:w-1/5"
      >
        Démo
      </ButtonLink>
    </BaseContainer>
  );
};

export default PubSection;
