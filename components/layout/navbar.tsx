import Image from "next/image";
import BaseContainer from "./container";
import logo from "../../assets/bilembo_logo.png";
import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  IconButton,
} from "@material-tailwind/react";
import MenuIcon from "../ui/icons/menu";
import { DefaultSidebar } from "../ui/sidebar";
import { ButtonLink } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";

export type Props = {
  className?: string;
  width?: number;
};

const Navbar: React.FC<Props> = ({ className, width }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickContact = (e: any) => {
    e.preventDefault();
    router.push("/contact");
  };

  const ChangeNavbar = () => {
    if (pathname === "/memorial/demo") {
      return "block lg:hidden";
    } else if (pathname === "/memorial/demo/biographie") {
      return "block lg:hidden";
    } else if (pathname === "/memorial/demo/souvenirs") {
      return "block lg:hidden";
    } else if (pathname === "/memorial/demo/temoignages") {
      return "block lg:hidden";
    } else {
      return "hidden";
    }
  };

  const ChangeNavbarDemo = () => {
    if (pathname === "/memorial/demo") {
      return "lg:flex lg:w-4/12";
    } else if (pathname === "/memorial/demo/biographie") {
      return "lg:flex lg:w-4/12";
    } else if (pathname === "/memorial/demo/souvenirs") {
      return "lg:flex lg:w-4/12";
    } else if (pathname === "/memorial/demo/temoignages") {
      return "lg:flex lg:w-4/12";
    } else {
      return "lg:hidden";
    }
  };

  return (
    <>
      <BaseContainer className="flex justify-between items-center">
        <div className="lg:w-4/12">
          <a href="/">
            <Image
              src={logo}
              alt="Logo Bilembo in memory"
              className="w-3/5 lg:w-5/12"
            />
          </a>
        </div>
        <div
          className={`hidden lg:flex gap-6 lg:w-5/12 items-center justify-center ${
            pathname === "/memorial/demo" ? "lg:hidden" : "hidden"
          } ${
            pathname === "/memorial/demo/biographie" ? "lg:hidden" : "hidden"
          } ${
            pathname === "/memorial/demo/souvenirs" ? "lg:hidden" : "hidden"
          } ${
            pathname === "/memorial/demo/temoignages" ? "lg:hidden" : "hidden"
          }`}
        >
          <a
            href="/qui_sommes_nous"
            className={`text-center hover:font-bold ${
              pathname === "/qui_sommes_nous" ? "font-bold" : "font-normal"
            }`}
          >
            Qui sommes nous
          </a>
          <a
            href="/comment_ca_marche"
            className={`text-center hover:font-bold ${
              pathname === "/comment_ca_marche" ? "font-bold" : "font-normal"
            }`}
          >
            Comment ça marche
          </a>
          <a
            href="/memorial/demo/biographie"
            className={`text-center hover:font-bold ${
              pathname === "/memorial/demo/biographie"
                ? "font-bold"
                : "font-normal"
            }`}
          >
            Démo
          </a>
        </div>
        <div
          className={`hidden lg:flex items-center justify-center gap-5 lg:w-5/12 ${ChangeNavbarDemo()} `}
        >
          <a
            href="/memorial/demo/biographie"
            className={`text-center hover:font-bold ${
              pathname === "/memorial/demo/biographie"
                ? "font-bold"
                : "font-normal"
            }`}
          >
            Biographie
          </a>
          <a
            href="/memorial/demo/souvenirs"
            className={`text-center hover:font-bold ${
              pathname === "/memorial/demo/souvenirs"
                ? "font-bold"
                : "font-normal"
            }`}
          >
            Souvenirs
          </a>
          <a
            href="/memorial/demo/temoignages"
            className={`text-center hover:font-bold ${
              pathname === "/memorial/demo/temoignages"
                ? "font-bold"
                : "font-normal"
            }`}
          >
            Témoignages
          </a>
        </div>
        <div className="hidden lg:flex justify-end items-center lg:w-4/12">
          <ButtonLink
            handleClick={() => router.push("/contact")}
            variant="contained"
            size="sm"
            className="lg:w-1/2"
          >
            Contactez-nous
          </ButtonLink>
        </div>
        <div
          className={`lg:hidden ${
            pathname === "/memorial/demo" ? "hidden" : "block"
          } ${pathname === "/memorial/demo/biographie" ? "hidden" : "block"} ${
            pathname === "/memorial/demo/souvenirs" ? "hidden" : "block"
          } ${pathname === "/memorial/demo/temoignages" ? "hidden" : "block"} `}
        >
          <Menu placement="bottom-end">
            <MenuHandler>
              <IconButton variant="text" className="p-10 text-center">
                <MenuIcon />
              </IconButton>
            </MenuHandler>
            <MenuList>
              <DefaultSidebar />
            </MenuList>
          </Menu>
        </div>
        <div className={`${ChangeNavbar()}`}>
          <Menu placement="bottom-end">
            <MenuHandler>
              <IconButton
                variant="text"
                className="text-center px-14 bg-primary-900 rounded-full hover:bg-white border border-2 border-primary-900"
              >
                <span className="font-semibold text-[0.9rem] px-2 text-white hover:text-primary-900 normal-case">
                  Partager
                </span>
              </IconButton>
            </MenuHandler>
            <MenuList>
              <DefaultSidebar />
            </MenuList>
          </Menu>
        </div>
      </BaseContainer>
    </>
  );
};

export default Navbar;