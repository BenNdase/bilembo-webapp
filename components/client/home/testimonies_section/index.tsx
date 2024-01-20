import Avatar from "../../../../assets/avatar.png";
import TestimoniesCard from "./card";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";
import Slideshow from "../../../ui/slide";

const Testimonies = [
  {
    name: "Kali Tshimanga",
    detail: "Entrepreneur",
    description: `" Kali à Bilembo , j'ai pu conserver les souvenirs de mon père décédé il y a plusieurs années. Les images, les textes et les photos m'ont permis de mieux connaître son histoire et de partager ses souvenirs avec ma famille".`,
    avatar: { Avatar },
  },
  {
    name: "Grace Frimpong",
    detail: "IT chez KoumiShop",
    description: `" Grâce à Bilembo , j'ai pu conserver les souvenirs de mon père décédé il y a plusieurs années. Les images, les textes et les photos m'ont permis de mieux connaître son histoire et de partager ses souvenirs avec ma famille".`,
    avatar: { Avatar },
  },
  {
    name: "Grace Frimpong",
    detail: "IT chez KoumiShop",
    description: `" Grâce à Bilembo , j'ai pu conserver les souvenirs de mon père décédé il y a plusieurs années. Les images, les textes et les photos m'ont permis de mieux connaître son histoire et de partager ses souvenirs avec ma famille".`,
    avatar: { Avatar },
  },
];

const TestimoniesSection = () => {
  return (
    <BaseContainer className="pt-16">
      <TitleSection
        description="Voici ce que nos clients ont dit"
        title="Témoignages"
      />
      <Slideshow />
      <div className="hidden lg:flex py-10">
        {Testimonies.map((fadeImage, index) => (
          <div key={index} className="p-10">
            <TestimoniesCard
              avatar={Avatar}
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
