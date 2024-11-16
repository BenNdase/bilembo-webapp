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
import { SlideDemo } from "@/components/ui/carousel/slide/demo";

const image = [photo1, photo2, photo3];

const MemorialDemoSection = () => {
  const router = useRouter();

  return (
    <BaseContainer>
      <div className="flex flex-col justify-center items-center lg:justify-start lg:flex-row lg:gap-10">
        <Image
          src={avatar}
          alt="Logo Bilembo in memory"
          className="w-1/2 md:w-4/12 lg:w-4/12 rounded-full lg:rounded-lg lg:static z-40 absolute top-32"
          data-aos="zoom-in"
        />
        <div>
          <div className="bg-primary-900 lg:bg-white mt-24 lg:mt-0 md:mt-26 pt-20 lg:pt-0 px-6 lg:px-0 pb-6 w-full">
            <div data-aos="zoom-in">
              <p className="text-lg text-white lg:text-primary-900 mt-8 md:mt-14 lg:mt-0 text-center lg:text-start">
                Nom :{" "}
                <b className="text-white lg:text-primary-900 font-semibold">
                  MATONDO
                </b>
              </p>
              <p className="text-lg text-white lg:text-primary-900 text-center lg:text-start">
                Postnom :{" "}
                <b className="text-white lg:text-primary-900 font-semibold">
                  KILANGA
                </b>{" "}
              </p>
              <p className="text-lg text-white lg:text-primary-900 text-center lg:text-start">
                Prénom :{" "}
                <b className="text-white lg:text-primary-900 font-semibold">
                  DANIEL
                </b>
              </p>
              <p className="text-lg text-white lg:text-primary-900 text-center lg:text-start">
                Naissance :{" "}
                <b className="text-white lg:text-primary-900 font-semibold">
                  17 Octobre 1967
                </b>
                , Likasi
              </p>
              <p className="text-lg text-white lg:text-primary-900 text-center lg:text-start">
                Décès :{" "}
                <b className="text-white lg:text-primary-900 font-semibold">
                  19 Avril 2020
                </b>
                , Bruxelles
              </p>
              <p className="text-lg text-white lg:text-primary-900 text-center lg:text-start">
                Profession :{" "}
                <b className="text-white lg:text-primary-900 font-semibold">
                  Coiffeur
                </b>
              </p>
              <p className="text-lg text-white lg:text-primary-900 text-center lg:text-start">
                Nationalité :{" "}
                <b className="text-white lg:text-primary-900 font-semibold">
                  Congolaise
                </b>
              </p>
            </div>
            <p
              className="text-white text-center lg:text-start mt-6 lg:text-primary-900"
              data-aos="zoom-in"
            >
              Matondo Kilanga Daniel était un coiffeur congolais, né le 17
              octobre 1967 à Jadotville, qui est aujourd’hui connue sous le nom
              de Likasi dans l’actuelle République Démocratique du Congo.
              <br />
              <br /> Il a consacré sa vie dans l’art de la coiffure et est
              devenu l’un des coiffeurs les plus respectés de sa région.
            </p>
          </div>

          <div
            className="my-8 lg:-my-0 flex flex-col gap-3 w-full lg:flex-row"
            data-aos="zoom-in"
          >
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
        <h3 className="font-bold mt-4 mb-2 text-xl" data-aos="fade-up">
          Jeuneusse et formation
        </h3>
        <p className="" data-aos="fade-up">
          Dès son plus jeune âge, Daniel Matondo Kilanga a montré un intérêt
          pour la coiffure en observant les coiffeurs locaux dans sa ville
          natale. Il a commencé à pratiquer la coiffure sur ses amis et sa
          famille dès l{"'"}âge de 15 ans, et a rapidement acquis une réputation
          pour son talent et sa créativité.
        </p>
      </div>
      <div>
        <h3 className="font-bold mt-4 mb-2 text-xl" data-aos="fade-up">
          Carrière professionnelle
        </h3>
        <p className="" data-aos="fade-up">
          Dans les années 1960, Daniel Matondo Kilanga a déménagé à Kinshasa, la
          capitale de la RDC, pour poursuivre sa carrière de coiffeur. Il a
          ouvert son propre salon de coiffure dans le quartier populaire de
          Matonge, où il a rapidement attiré une clientèle fidèle grâce à son
          expertise et son professionnalisme. <br />
          <br />
          Au fil des ans, Daniel Matondo Kilanga est devenu célèbre pour ses
          coiffures uniques et audacieuses, qui ont attiré l{"'"}attention de
          personnalités publiques et de célébrités locales. Il a également formé
          de nombreux coiffeurs talentueux qui ont suivi ses techniques et son
          style de coiffure.
        </p>
      </div>
      <div>
        <h3 className="font-bold mt-4 mb-2 text-xl" data-aos="fade-up">
          Apogé
        </h3>
        <p className="" data-aos="fade-up">
          Malheureusement, Daniel Matondo Kilanga est décédé le 16 janvier 2001
          à l{"'"}âge de 61 ans, laissant derrière lui une grande communauté de
          clients, de disciples, de collègues et d{"'"}amis qui ont été
          profondément touchés par sa mort. Sa contribution à l{"'"}industrie de
          la coiffure en RDC reste inoubliable et son héritage continue d{"'"}
          inspirer les coiffeurs congolais d{"'"}aujourd{"'"}hui.
        </p>
      </div>
      <div className="mt-10">
        <TitleSection title="Photos" />
        <p className="mb-6 mt-2 text-center lg:" data-aos="fade-up">
          Les souvenirs que nous avons de ceux que nous avons aimés et perdus
          sont des trésors précieux qui ne peuvent jamais être enlevés de nos
          cœurs
        </p>
        <div className="mb-10 lg:hidden" data-aos="fade-up">
          <SlideDemo />
        </div>
        <div className="hidden lg:flex gap-0 flex-wrap">
          <Image
            src={photo1}
            alt="image 1"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            data-aos="zoom-in"
          />
          <Image
            src={photo2}
            alt="image 2"
            data-aos="zoom-in"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
          <Image
            src={photo3}
            alt="image 3"
            data-aos="zoom-in"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
          <Image
            src={photo1}
            alt="image 1"
            data-aos="zoom-in"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
          <Image
            src={photo2}
            alt="image 2"
            data-aos="zoom-in"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
          <Image
            src={photo3}
            alt="image 3"
            data-aos="zoom-in"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
          <Image
            src={photo1}
            alt="image 1"
            data-aos="zoom-in"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
          <Image
            src={photo2}
            alt="image 2"
            data-aos="zoom-in"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
          <Image
            src={photo3}
            alt="image 3"
            data-aos="zoom-in"
            className="w-1/5 h-[12rem] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          />
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

export default MemorialDemoSection;
