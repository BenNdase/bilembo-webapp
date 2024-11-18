import { usePathname } from "next/navigation";
import React from "react";

const BarutiNavigation = () => {
  const pathname = usePathname();

  // Vérifiez si le pathname correspond à votre condition
  const shouldDisplayComponent = pathname.startsWith(
    "/memorial/leonard_baruti_kasongo"
  );

  return (
    <div
      className={`hidden lg:flex items-center justify-center gap-5 lg:w-5/12 ${
        shouldDisplayComponent ? "lg:flex lg:w-4/12" : "lg:hidden"
      } `}
    >
      <a
        href="/memorial/leonard_baruti_kasongo/"
        className={`text-center hover:font-bold ${
          shouldDisplayComponent ? "font-bold" : "font-normal"
        }`}
      >
        Biographie
      </a>
      <a
        href="/memorial/leonard_baruti_kasongo/souvenirs"
        className={`text-center hover:font-bold ${
          pathname === "/memorial/leonard_baruti_kasongo/souvenirs"
            ? "font-bold"
            : "font-normal"
        } `}
      >
        Souvenirs
      </a>
      <a
        href="/memorial/leonard_baruti_kasongo/temoignages"
        className={`text-center hover:font-bold ${
          pathname === "/memorial/leonard_baruti_kasongo/temoignages"
            ? "font-bold"
            : "font-normal"
        }`}
      >
        Témoignages
      </a>
    </div>
  );
};

export default BarutiNavigation;
