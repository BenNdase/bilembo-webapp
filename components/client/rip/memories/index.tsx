import MemoriesCard from "./card";
import photo1 from "@/assets/demo/memories/ouverture.jpg";
import photo2 from "@/assets/demo/memories/businessman.jpg";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";
import { datas } from "@/services/data/data";

const MemoriesRipSection = () => {
  return (
    <BaseContainer className="mb-10">
      <TitleSection title="Souvenirs" />
      <div className="flex flex-col gap-5 lg:mt-6">
        {datas.map(
          (data, index) =>
            data.slug === "leonard_baruti_kasongo" &&
            data.souvenirs.map((souvenir) => (
              <MemoriesCard
                key={index}
                src={souvenir.image}
                url={souvenir.videos}
                title={souvenir.title}
                description={souvenir.description}
              />
            ))
        )}
      </div>
    </BaseContainer>
  );
};

export default MemoriesRipSection;
