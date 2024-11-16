import Image from "next/image";
import BongolabsLogo from "../../../../assets/partners/Logo bongo.png";
import ExpunLogo from "../../../../assets/partners/logo ExpunRDC.png";
import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";

const PartnerSection = () => {
  return (
    <BaseContainer className="py-10 lg:py-20">
      <TitleSection title="Partenaires" description="Ils nous font confiance" />
      <div
        className="flex flex-col items-center justify-center gap-4 pt-8 lg:flex-row"
        data-aos="zoom-in"
      >
        <div className="flex items-center justify-center">
          <Image
            src={BongolabsLogo}
            alt="Logo bongolabs"
            className="w-3/5 lg:w-4/5"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={ExpunLogo}
            alt="Logo expunrdc"
            className="w-3/5 lg:w-4/5"
          />
        </div>
      </div>
    </BaseContainer>
  );
};

export default PartnerSection;
