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
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:flex-wrap lg:mt-6">
        <TestimoniesCard
          src={photo3}
          title="Josephine Kilanga"
          description="Daniel était un mari et un père magnifique, une personne calme et souriante. Paix à son âme"
          alt="Frere"
          details="Femme"
        />
        <TestimoniesCard
          src={photo2}
          title="Joseph Binda Kilanga"
          description="Papa était un ami, un père et un confident pour moi. Il m'a toujours prodigué des conseils qui m'ont beaucoup aidé. Paix à son âme papa, je ne cesserai de t'aimer."
          alt="Frere"
          details="Fils"
        />
        <TestimoniesCard
          src={photo1}
          title="Jean-Paul Mbiya"
          description="Daniel était un ami proche, une personne calme et souriante. Paix à son âme"
          alt="Ami de"
          details="Ami"
        />
      </div>
    </BaseContainer>
  );
};

export default TestimoniesSectionOfMemorial;
