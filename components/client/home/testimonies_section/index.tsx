import Avatar from "../../../../assets/avatar.png";
import TestimoniesCard from "./card";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";
import Slideshow from "../../../ui/slide";
import ImgPrisca from "@/assets/testimony/prisca.jpeg";

const Testimonies = [
  {
    name: "Prisca Makila",
    detail: "CEO at KIM Engineering",
    description: `"Je suis profondément touché par l'initiative de Bilembo. La possibilité de partager les photos, la biographie et les détails de la vie passée de mon père à travers un simple code QR sur sa pierre tombale est véritablement révolutionnaire. Cette belle démarche permet de perpétuer la mémoire de mon père et offre un réconfort inestimable à toute ma famille. Bravo à Bilembo pour cette contribution précieuse à la préservation des souvenirs et à la célébration des vies passées".`,
    avatar: { ImgPrisca },
  },
  // {
  //   name: "Grace Frimpong",
  //   detail: "IT chez KoumiShop",
  //   description: `" Grâce à Bilembo , j'ai pu conserver les souvenirs de mon père décédé il y a plusieurs années. Les images, les textes et les photos m'ont permis de mieux connaître son histoire et de partager ses souvenirs avec ma famille".`,
  //   avatar: { Avatar },
  // },
  // {
  //   name: "Grace Frimpong",
  //   detail: "IT chez KoumiShop",
  //   description: `" Grâce à Bilembo , j'ai pu conserver les souvenirs de mon père décédé il y a plusieurs années. Les images, les textes et les photos m'ont permis de mieux connaître son histoire et de partager ses souvenirs avec ma famille".`,
  //   avatar: { Avatar },
  // },
];

const TestimoniesSection = () => {
  return (
    <BaseContainer className="pt-16">
      <TitleSection
        description="Voici ce que nos clients ont dit"
        title="Témoignages"
      />
      <Slideshow />
      <div className="hidden lg:flex justify-center items-center py-10">
        {Testimonies.map((fadeImage, index) => (
          <div key={index} className="p-10">
            <TestimoniesCard
              avatar={ImgPrisca}
              name={fadeImage.name}
              content={fadeImage.description}
              detail={fadeImage.detail}
            />
          </div>
        ))}
      </div>
    </BaseContainer>
  );
};

export default TestimoniesSection;
