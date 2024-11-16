import Image from "next/image";
import photo from "../../../../assets/in Memory.jpg";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";

const AboutSectionForHome = () => {
  return (
    <BaseContainer className="lg:flex lg:flex-col lg:gap-4">
      {/* <TitleSection title="A propos" description="Qu'est-ce que Bilembo" />
      <p
        className="text-sm py-4 lg:py-8 lg:px-20 lg:text-center lg:text-base"
        data-aos="zoom-in"
      >
        Bilembo est destiné à honorer nos êtres chers disparues. En effet, les
        personnes qui nous ont quittés ont chacun une histoire qui mérite d’être
        connue par les générations futures. Cette histoire, très souvent, nous
        la conservons à travers différents moyens tels que des albums photos,
        des lettres, des vidéos et certains objets. Malheureusement, rapidement
        avec le temps, ces souvenirs se détériorent et disparaître (les photos
        et lettres deviennent illisibles, les supports de stockage des vidéos
        s’infectent ou se perdent, etc).
      </p> */}
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start">
        <Image
          src={photo}
          alt="Bilembo in memory mobile scan"
          className="w-5/5 lg:mt-6"
          data-aos="zoom-in"
        />
        <div
          className="lg:w-2/4 lg:flex lg:flex-col lg:items-start"
          data-aos="zoom-in"
        >
          <TitleSection title="Bilembo In Memory" />
          <p className="text-sm py-4 lg:text-base">
            Lorsque nous nous rendons au cimetière pour honorer la mémoire de
            nos proches disparus, nous constatons souvent que les seules
            informations disponibles sont leur nom et leurs dates de naissance
            et de décès, gravées sur la tombe. Pour remédier à ce problème,
            Bilembo In Memory propose une solution permettant aux familles
            d’accéder facilement et indéfiniment à un album de souvenirs dédié
            aux personnes disparues.
            <br />
            <br /> Cette solution repose sur une plaque apposé sur la sépulture
            du défunt, qui permet d’accéder à l’album de souvenirs de manière
            directe et immédiate. Ainsi, les familles peuvent se remémorer les
            souvenirs de leurs proches à tout moment, et garder leur mémoire
            vivante pour les générations futures.
          </p>
        </div>
      </div>
    </BaseContainer>
  );
};

export default AboutSectionForHome;
