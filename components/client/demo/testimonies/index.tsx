import TestimoniesCard from "./card";
import photo1 from "@/assets/demo/memories/ami.jpg";
import photo3 from "@/assets/demo/memories/front.jpg";
import photo2 from "@/assets/demo/memories/middle.jpg";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";

const TestimoniesSectionOfMemorial = () => {
  return (
    <BaseContainer className="mb-10">
      <TitleSection title="Témoignages" />
      <div className="flex flex-col justify-center items-center lg:justify-between gap-5 lg:gap-0 lg:flex-row lg:flex-wrap mt-6">
        <TestimoniesCard
          src={photo3}
          name="Josephine Kilanga"
          content="Daniel était un mari et un père magnifique, une personne calme et souriante. Paix à son âme"
          alt="Frere"
          detail="Femme"
        />
        <TestimoniesCard
          src={photo2}
          name="Joseph Binda Kilanga"
          content="Papa était un ami, un père et un confident pour moi. Il m'a toujours prodigué des conseils qui m'ont beaucoup aidé. Paix à son âme papa, je ne cesserai de t'aimer."
          alt="Frere"
          detail="Fils"
        />
        <TestimoniesCard
          src={photo1}
          name="Jean-Paul Mbiya"
          content="Daniel était un ami proche, une personne calme et souriante. Paix à son âme"
          alt="Ami de"
          detail="Ami"
        />
      </div>
    </BaseContainer>
  );
};

export default TestimoniesSectionOfMemorial;
