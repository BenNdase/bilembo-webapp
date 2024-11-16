import BaseContainer from "../../layout/container";
import TitleSection from "../../layout/title/section";
import { ContactForm } from "../../ui/forms/contact";
import FacebookIcon from "../../ui/icons/facebook";
import InstagramIcon from "../../ui/icons/instagram";
import LinkedinIcon from "../../ui/icons/linkedin";
import TwitterIcon from "../../ui/icons/twitter";

const ContactSection = () => {
  return (
    <BaseContainer>
      <TitleSection title="Contact" description="Nous contacter" />
      <div className="mt-6 lg:flex lg:gap-3 lg:justify-between lg:mt-10">
        <div className="lg:w-[45%]">
          <p>
            N°44 Avenue de la Démocratie Dans l{"'"}enceinte du Cedesurk(Ref:
            INRB) Commune de la Gombe, Kinshasa République Démocratique du
            Congo. <br />
            <br /> <a href="tel:+243898359903">+243 898 359 903</a>
          </p>
          <div className="flex gap-3 mt-6">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedinIcon />
          </div>
          <div className="mt-6 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5261813690818!2d15.301928327385923!3d-4.311731020178125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c48ae8cad7%3A0xba5a8dfd8d484963!2sCedesurk!5e0!3m2!1sfr!2scd!4v1695718733719!5m2!1sfr!2scd"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="lg:w-[45%] lg:drop-shadow-lg bg-white">
          <ContactForm />
        </div>
      </div>
    </BaseContainer>
  );
};

export default ContactSection;
