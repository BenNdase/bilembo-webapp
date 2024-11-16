"use client";
import BaseContainer from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import Image from "next/image";
import photo from "@/assets/Phone.jpg";
import { useRouter } from "next/navigation";

const BannerSectionOfHome = () => {
  const router = useRouter();

  return (
    <BaseContainer className="p-4 lg:flex lg:justify-between lg:items-center lg:-mt-6 lg:pb-16 lg:h-[100vh]">
      <div className="lg:w-3/5 lg:-mt-16">
        <h1 className="text-2xl font-extrabold lg:text-5xl lg:font-extrabold">
          Parce que chaque vie qui passe sur cette terre laisse des traces
        </h1>
        <p className="text-sm py-2 lg:text-lg lg:py-9">
          Découvrez Bilembo In Memory, une application innovante qui vous permet
          de mieux connaître votre être cher décédé via un médaillon scannable
          depuis sa tombe.
        </p>
        <div className="hidden lg:flex gap-6">
          <ButtonLink
            handleClick={() => router.push("/contact")}
            variant="outlined"
            size="sm"
            className="lg:w-1/3"
          >
            Contactez-nous
          </ButtonLink>
          <ButtonLink
            handleClick={() => router.push("/memorial/demo")}
            variant="contained"
            size="sm"
            className="lg:w-1/3"
          >
            Démo
          </ButtonLink>
        </div>
      </div>
      <div className="py-6 flex items-center justify-center lg:w-1/2">
        <Image
          src={photo}
          alt="Bilembo in memory mobile"
          className="w-3/5 lg:w-6/12"
        />
      </div>
      <div className="lg:hidden">
        <ButtonLink
          handleClick={() => router.push("/contact")}
          variant="outlined"
          size="sm"
          className="my-2"
        >
          Contactez-nous
        </ButtonLink>
        <ButtonLink
          handleClick={() => router.push("/memorial/demo/biographie")}
          variant="contained"
          size="sm"
          className="my-2"
        >
          Démo
        </ButtonLink>
      </div>
    </BaseContainer>
  );
};

export default BannerSectionOfHome;
