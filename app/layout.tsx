import "./globals.css";
import type { Metadata } from "next";
import { Khand } from "next/font/google";
import Provider from "./provider/provider";

// const khand = Khand({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Bilembo In Memory",
  description:
    "Parce que chaque vie qui passe sur cette terre laisse des traces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Provider>
        <body className={` text-[#272727]`}>{children}</body>
      </Provider>
    </html>
  );
}
