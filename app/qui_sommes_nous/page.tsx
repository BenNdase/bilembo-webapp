import AboutUsSection from "../../components/client/about_us/about";
import VisionAndGoalSection from "../../components/client/about_us/vision";
import Layout from "../../components/layout/layout";

const AboutUsPage = () => {
  return (
    <Layout
      title="Bilembo - Qui sommes nous"
      content="Bilembo est destiné à honorer nos êtres chers disparues ..."
    >
      <main>
        <AboutUsSection />
        <VisionAndGoalSection />
      </main>
    </Layout>
  );
};

export default AboutUsPage;
