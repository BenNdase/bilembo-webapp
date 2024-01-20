import StepCard from "./card";
import MonneyIcon from "@/assets/how_it_works/argent.png";
import QRCodeIcon from "@/assets/how_it_works/qr-code (1).png";
import ScanIcon from "@/assets/how_it_works/analyse-qr.png";
import HistoryBookIcon from "@/assets/how_it_works/livre-dhistoire.png";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";

const StepSection = () => {
  return (
    <BaseContainer>
      <TitleSection title="Comment ça marche" description="Fonctionnement" />
      <div>
        <StepCard
          icon={MonneyIcon}
          alt="Etape 1"
          title="Commandez votre médaillon Bilembo contenant un QR code unique"
          description="Nous accompagnons les familles dans la création d'un album de souvenirs dédié à leur proche disparu. Cet album personnalisé peut contenir des photos, des vidéos, des textes ou toute autre élément qui évoque des souvenirs de la personne décédée. Nous nous engageons à créer un album unique, reflétant la personnalité de la personne disparue. Nous écoutons attentivement les besoins et les souhaits des familles pour créer un album de souvenirs qui leur ressemble, à la hauteur de leurs attentes"
        />
        <StepCard
          icon={QRCodeIcon}
          alt="Etape 2"
          title="Placez le sur la pierre tombale de votre être cher"
          description="Une fois que l'album de souvenirs est créé, une plaque avec un Quick Response code est généré pour cet album et apposé sur la sépulture du défunt. Ce Quick Response code peut être scanné à tout moment par les membres de la famille ou les visiteurs du cimetière à l'aide d'un smartphone ou d'une tablette."
        />
        <StepCard
          icon={ScanIcon}
          alt="Etape 3"
          title="Scannez le médaillon Bilembo via notre smartphone ou votre tablette"
          description="Une fois que le Quick Response code sur la plaque est scanné, l'utilisateur est redirigé vers l'album de souvenirs en ligne où il peut consulter les photos, les vidéos et les textes. L'accès à l'album est illimité et peut être consulté à tout moment, de n'importe quel endroit avec une connexion Internet. Les familles peuvent ainsi se remémorer les souvenirs de leurs proches disparus à tout moment et garder leur mémoire vivante pour les générations futures."
        />
        <StepCard
          icon={HistoryBookIcon}
          alt="Etape 4"
          title="Découvrez son histoire et sa personnalité"
          description="Une fois que le Quick Response code sur la plaque est scanné, l'utilisateur est redirigé vers l'album de souvenirs en ligne où il peut consulter les photos, les vidéos et les textes. L'accès à l'album est illimité et peut être consulté à tout moment, de n'importe quel endroit avec une connexion Internet. Les familles peuvent ainsi se remémorer les souvenirs de leurs proches disparus à tout moment et garder leur mémoire vivante pour les générations futures."
        />
      </div>
    </BaseContainer>
  );
};

export default StepSection;
