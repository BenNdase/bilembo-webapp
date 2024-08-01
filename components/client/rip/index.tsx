"use client";
import Image from "next/image";
import avatar from "@/assets/demo/Avatar.jpg";
import { useRouter } from "next/navigation";
import photo1 from "@/assets/demo/memories/businessman.jpg";
import photo2 from "@/assets/demo/memories/latino.jpg";
import photo3 from "@/assets/demo/memories/latino.jpg";
import BaseContainer from "../../layout/container";
import { ButtonLink } from "../../ui/button";
import TitleSection from "../../layout/title/section";
import { Slide } from "../../ui/carousel/slide";

interface Souvenir {
  image: string;
  date: string;
  title: string;
  description: string;
}

export type Props = {
  className?: string;
  profile_image: string;
  name: string;
  firstname: string;
  lastname: string;
  birth: string;
  birthplace?: string;
  deceased: string;
  deceasedplace?: string;
  profession: string;
  nationality: string;
  summary: string;
  youth_training: string;
  career: string;
  images: string[];
  cause_death: string;
  epilogue: string;
};

const MemorialSection = ({
  profile_image,
  name,
  firstname,
  lastname,
  birth,
  birthplace,
  deceased,
  deceasedplace,
  profession,
  nationality,
  summary,
  youth_training,
  career,
  images,
  cause_death,
  epilogue,
}: Props) => {
  const router = useRouter();

  return (
    <BaseContainer>
      <div className="flex flex-col justify-center items-center lg:justify-start lg:flex-row lg:gap-10">
        <Image
          src={profile_image}
          width="900"
          height="900"
          alt={`Photo de ${name} ${lastname} ${firstname}`}
          className="w-[50%] rounded-full md:w-4/12 lg:w-3/12"
        />
        <div className="px-1">
          <div className="lg:mt-0 md:mt-26 w-full">
            <div>
              <div className="mt-6 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-extrabold text-primary-900">
                  <strong>{name}</strong> <strong>{lastname}</strong>{" "}
                  <strong>{firstname}</strong>
                </h3>
                <p className="text-center lg:text-start">
                  <strong>{birth}</strong>, <span>{birthplace}</span> -{" "}
                  <strong>{deceased}</strong>, <span>{deceasedplace}</span>
                </p>
              </div>
            </div>
            <p className=" lg:text-start mt-6 text-primary-900 text-center">
              <span
                dangerouslySetInnerHTML={{
                  __html: summary.replace(/\n/g, "<br />"),
                }}
              />
            </p>
          </div>

          <div className="my-8 lg:-my-0 flex flex-col gap-3 w-full lg:flex-row">
            <ButtonLink
              handleClick={() => router.push("/contact")}
              variant="outlined"
              size="sm"
              className="lg:w-1/3"
            >
              Voir son documentaire
            </ButtonLink>
            <ButtonLink
              handleClick={() => router.push("/memorial/demo")}
              variant="contained"
              size="sm"
              className="lg:w-1/3"
            >
              Écouter son histoire
            </ButtonLink>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-extrabold uppercase mt-4 mb-2 text-xl">
          Jeuneusse et formation
        </h3>
        <p className="">
          <span
            dangerouslySetInnerHTML={{
              __html: youth_training.replace(/\n/g, "<br />"),
            }}
          />
        </p>
      </div>
      <div>
        <h3 className="font-extrabold uppercase mt-4 mb-2 text-xl">
          Carrière professionnelle
        </h3>
        <p className="">
          <span
            dangerouslySetInnerHTML={{
              __html: career.replace(/\n/g, "<br />"),
            }}
          />
        </p>
      </div>
      <div>
        <h3 className="font-extrabold uppercase mt-4 mb-2 text-xl">Décès</h3>
        <p className="">
          <span
            dangerouslySetInnerHTML={{
              __html: cause_death.replace(/\n/g, "<br />"),
            }}
          />
        </p>
      </div>
      <div className="mt-10">
        <div>
          <h3 className="font-extrabold uppercase mt-4 mb-2 text-xl">Images</h3>
          <p className="mb-6">
            Les souvenirs que nous avons de ceux que nous avons aimés et perdus
            sont des trésors précieux qui ne peuvent jamais être enlevés de nos
            cœurs
          </p>
        </div>
        <div className="mb-10 lg:hidden">
          <Slide images={images} />
        </div>
        <div className="hidden lg:flex gap-0 flex-wrap">
          {images && images.length > 0 ? (
            images.map((image, index) => (
              <Image
                key={index}
                width="900"
                height="900"
                className="w-1/5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                src={image}
                alt={`Image ${index}`}
              />
            ))
          ) : (
            <p>Aucune image disponible</p>
          )}
        </div>
        <div>
          <h3 className="font-extrabold uppercase mt-4 mb-2 text-xl">
            Epilogue
          </h3>
          <p className="">
            <span
              dangerouslySetInnerHTML={{
                __html: epilogue.replace(/\n/g, "<br />"),
              }}
            />
          </p>
        </div>
      </div>
      <div className="hidden lg:block mt-10">
        <ButtonLink
          handleClick={() => router.push("/contact")}
          variant="contained"
          size="sm"
          className="lg:w-1/6"
        >
          Partager
        </ButtonLink>
      </div>
    </BaseContainer>
  );
};

export default MemorialSection;
