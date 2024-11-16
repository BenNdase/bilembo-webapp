import MemoriesCard from "./card";
import photo1 from "@/assets/demo/memories/ouverture.jpg";
import photo2 from "@/assets/demo/memories/businessman.jpg";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";

const MemoriesSection = () => {
  return (
    <BaseContainer className="mb-10">
      <TitleSection title="Souvenirs" />
      <div className="flex flex-col gap-5 lg:mt-6">
        <MemoriesCard
          title="20 Juin 2006 - Bruxelles"
          description="Ce jour-là, 21 mai comme aujourd'hui, mais en 1997, Mzee Laurent Désiré Kabila atterrit enfin à Kinshasa, soit 5 jours après la prise de la capitale par les forces de l'AFDL.Sur le tarmac de l'aéroport international de Ndjili, le comité d'accueil est composé, entre autres, de Bizima Karaha, Déogratias Bugera, Anselme Masasu et Moise Nyarugabo.Demeuré à Lubumbashi (province du Shaba à ce moment-là) lors de la prise de Kinshasa, Laurent-Désiré Kabila avait déclaré, le 18 mai, qu'il assumerait désormais les fonctions de chef de l'État, État qu'il venait de rebaptiser République démocratique du Congo (en remplacement de 'Zaïre').Laurent-Désiré Kabila avait aussi exigé des militaires qu'ils capitulent, demandant à la population de dénoncer ceux qui ne le feraient pas. En outre, il affirma avoir contacté les généraux de l'armée zaïroise qui avaient accepté de se soumettre."
          alt="Souvenirs bruxelles"
          src={photo1}
        />
        <MemoriesCard
          title="4 Mars 2020 - Kinshasa"
          description="Ce jour-là, 21 mai comme aujourd'hui, mais en 1997, Mzee Laurent Désiré Kabila atterrit enfin à Kinshasa, soit 5 jours après la prise de la capitale par les forces de l'AFDL.Sur le tarmac de l'aéroport international de Ndjili, le comité d'accueil est composé, entre autres, de Bizima Karaha, Déogratias Bugera, Anselme Masasu et Moise Nyarugabo.Demeuré à Lubumbashi (province du Shaba à ce moment-là) lors de la prise de Kinshasa, Laurent-Désiré Kabila avait déclaré, le 18 mai, qu'il assumerait désormais les fonctions de chef de l'État, État qu'il venait de rebaptiser République démocratique du Congo (en remplacement de 'Zaïre').Laurent-Désiré Kabila avait aussi exigé des militaires qu'ils capitulent, demandant à la population de dénoncer ceux qui ne le feraient pas. En outre, il affirma avoir contacté les généraux de l'armée zaïroise qui avaient accepté de se soumettre."
          alt="Souvenirs bruxelles"
          src={photo2}
        />
      </div>
    </BaseContainer>
  );
};

export default MemoriesSection;
