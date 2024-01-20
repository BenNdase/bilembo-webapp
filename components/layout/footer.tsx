import Image from "next/image";
import BaseContainer from "./container";
import logo from "../../assets/bilembo_logo.png";
import ArrowRight from "../ui/icons/arrowright";
import FacebookIcon from "../ui/icons/facebook";
import InstagramIcon from "../ui/icons/instagram";
import TwitterIcon from "../ui/icons/twitter";
import LinkedinIcon from "../ui/icons/linkedin";
import { usePathname } from "next/navigation";
import TabsDemo from "../client/demo/tabs";

const Footer = () => {
  const pathname = usePathname();

  const BottomFooter = () => {
    if (pathname === "/memorial/demo") {
      return "block";
    } else if (pathname === "/memorial/demo/biographie") {
      return "block";
    } else if (pathname === "/memorial/demo/souvenirs") {
      return "block";
    } else if (pathname === "/memorial/demo/temoignages") {
      return "block";
    } else {
      return "hidden";
    }
  };

  return (
    <>
      <BaseContainer>
        <hr
          color="#272727"
          className={`${
            pathname === "/memorial/demo" ? "hidden lg:block" : "block"
          } ${
            pathname === "/memorial/demo/biographie"
              ? "hidden lg:block"
              : "block"
          } ${
            pathname === "/memorial/demo/souvenirs"
              ? "hidden lg:block"
              : "block"
          } ${
            pathname === "/memorial/demo/temoignages"
              ? "hidden lg:block"
              : "block"
          }`}
        />
        <div
          className={`flex flex-col lg:flex-row lg:justify-between ${
            pathname === "/memorial/demo" ? "hidden lg:flex" : "block"
          } ${
            pathname === "/memorial/demo/biographie"
              ? "hidden lg:flex"
              : "block"
          } ${
            pathname === "/memorial/demo/souvenirs" ? "hidden lg:flex" : "block"
          } ${
            pathname === "/memorial/demo/temoignages"
              ? "hidden lg:flex"
              : "block"
          }`}
        >
          <div className="lg:w-5/12">
            <div>
              <Image
                src={logo}
                alt="Logo Bilembo in memory"
                className="w-1/2"
              />
            </div>
            <p className="text-sm p-2">
              Aujourd’hui, avec La révolution digitale ou technologique (la
              technologie de l’information) qui envahit tous les domaines, et
              nous donnent les moyens les plus efficaces de protection de
              données. Pourquoi ne pas l’utiliser pour honorer les mémoires de
              nos proches disparus ou garder nos souvenirs ? BILEMBO, est la
              réponse à cette question.
            </p>
          </div>
          <div className="lg:w-5/12 lg:flex lg:justify-center lg:pt-16">
            <div>
              <h3 className="p-2 font-bold text-xl">Entreprise</h3>
              <div className="">
                <div>
                  <a href="/" className="flex items-center font-bold">
                    <span>
                      <ArrowRight />
                    </span>
                    Qui sommes-nous
                  </a>
                </div>
                <div>
                  <a
                    href="/comment_ca_marche#faq"
                    className="flex items-center font-bold"
                  >
                    <span>
                      <ArrowRight />
                    </span>
                    FAQ
                  </a>
                </div>
                <div>
                  <a href="/" className="flex items-center font-bold">
                    <span>
                      <ArrowRight />
                    </span>
                    Contact
                  </a>
                </div>
                <div>
                  <a href="/" className="flex items-center font-bold">
                    <span>
                      <ArrowRight />
                    </span>
                    Comment ça marche
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 lg:pt-20 lg:pb-8">
            <p className="text-sm p-2 lg:pt-4">
              N°44 Avenue de la Démocratie Dans l’enceinte du Cedesurk(Ref:
              INRB) Commune de la Gombe, Kinshasa République Démocratique du
              Congo.
              <br />
              <br />
              <a href="tel:+243 898 359 903">+243 898 359 903</a>
            </p>
            <div className="flex gap-3">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedinIcon />
            </div>
          </div>
        </div>
        <p
          className={`font-bold text-md py-4 lg:text-center lg:font-semibold lg:py-8 ${
            pathname === "/memorial/demo" ? "hidden lg:block" : "block"
          } ${
            pathname === "/memorial/demo/biographie"
              ? "hidden lg:block lg:text-center lg:font-semibold lg:py-8"
              : "block"
          } ${
            pathname === "/memorial/demo/souvenirs"
              ? "hidden lg:block lg:text-center lg:font-semibold lg:py-8"
              : "block"
          } ${
            pathname === "/memorial/demo/temoignages"
              ? "hidden lg:block lg:text-center lg:font-semibold lg:py-8"
              : "block"
          }`}
        >
          Copyright © 2023 Fait par{" "}
          <a href="https://www.bongolabs.info/" target="_blank">
            bongoLabs
          </a>
        </p>
      </BaseContainer>
      <div
        className={`sticky w-full bottom-0 z-50 ${BottomFooter()} lg:hidden`}
      >
        <div>
          <TabsDemo />
        </div>
      </div>
    </>
  );
};

export default Footer;
