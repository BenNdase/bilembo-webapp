import { usePathname } from "next/navigation";
import React from "react";

const DemoNavigation = () => {
  const pathname = usePathname();

  // Vérifiez si le pathname correspond à votre condition
  const shouldDisplayComponent = pathname.startsWith("/memorial/demo");

  const shouldDisplayTabsBaruti = pathname.startsWith(
    "/memorial/leonard_baruti_kasongo"
  );
  return (
    <div
      className={`hidden lg:flex items-center justify-center gap-5 lg:w-5/12 ${
        shouldDisplayComponent ? "lg:flex lg:w-4/12" : "lg:hidden"
      } `}
    >
      <a
        href="/memorial/demo/"
        className={`text-center hover:font-bold ${
          shouldDisplayComponent ? "font-bold" : "font-normal"
        } ${
          pathname === "/memorial/leonard_baruti_kasongo"
            ? "font-bold"
            : "font-normal"
        }`}
      >
        Biographie
      </a>
      <a
        href="/memorial/demo/souvenirs"
        className={`text-center hover:font-bold ${
          pathname === "/memorial/demo/souvenirs" ? "font-bold" : "font-normal"
        } `}
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
  );
};

export default DemoNavigation;
