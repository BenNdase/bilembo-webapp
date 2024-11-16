import FAQSection from "@/components/client/how_it_works/faq";
import StepSection from "@/components/client/how_it_works/step_section";
import Layout from "@/components/layout/layout";

const HowItWorksPage = () => {
  return (
    <Layout
      title="Bilembo - Comment ça marche"
      content="Commandez votre médaillon Bilembo contenant un QR code unique ..."
    >
      <main>
        <StepSection />
        <FAQSection />
      </main>
    </Layout>
  );
};

export default HowItWorksPage;
