import AdvantageCard from "./card";
import DiscloseIcon from "../../../../assets/advantages/histoire.png";
import ImmortalizeIcon from "../../../../assets/advantages/telechargement-dans-le-cloud.png";
import CommemorateIcon from "../../../../assets/advantages/monument-commemoratif-de-guerre.png";
import ConnectionIcon from "../../../../assets/advantages/connexions.png";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";

const AdvantagesSection = () => {
  return (
    <BaseContainer className="lg:py-10">
      <TitleSection title="Avantages" description="Pourquoi Bilembo ?" />
      <div className="flex flex-wrap justify-center items-center">
        <AdvantageCard
          icon={DiscloseIcon}
          alt="histoire et personnalité de votre être cher"
          title="Divulguer"
          description="Découvrez l'histoire et la personnalité de votre être cher"
        />
        <AdvantageCard
          icon={ImmortalizeIcon}
          alt="Gardez le souvenir"
          title="Immortaliser"
          description="Gardez le souvenir de votre être cher vivant"
        />
        <AdvantageCard
          icon={CommemorateIcon}
          alt="Perpétuer son héritage"
          title="Commémorer"
          description="Perpétuer son héritage et transmettez-le à vos proches"
        />
        <AdvantageCard
          icon={ConnectionIcon}
          alt="Restez connecté"
          title="Connecter"
          description="Restez connecté avec la mémoire de votre être cher, où que vous soyez"
        />
      </div>
    </BaseContainer>
  );
};

export default AdvantagesSection;
