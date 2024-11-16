import Image from "next/image";
import Layout from "../components/layout/layout";
import BannerSectionOfHome from "../components/client/home/banner";
import AboutSectionForHome from "../components/client/home/about_section";
import AdvantagesSection from "../components/client/home/advantages_section";
import TestimoniesSection from "../components/client/home/testimonies_section";
import PubSection from "../components/client/home/pub_section";
import PartnerSection from "../components/client/home/partner_section";

export default function Home() {
  return (
    <Layout
      title="Bilembo - Home"
      content="Parce que chaque vie qui passe sur cette terre laisse des traces ..."
    >
      <main className="">
        <BannerSectionOfHome />
        <AboutSectionForHome />
        <AdvantagesSection />
        <TestimoniesSection />
        <PubSection />
        <PartnerSection />
      </main>
    </Layout>
  );
}
