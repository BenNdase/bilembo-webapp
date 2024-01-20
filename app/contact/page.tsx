import ContactSection from "../../components/client/contact";
import Layout from "../../components/layout/layout";

const HowItWorksPage = () => {
  return (
    <Layout
      title="Bilembo - Contact"
      content="Commandez votre médaillon Bilembo contenant un QR code unique ..."
    >
      <main>
        <ContactSection />
      </main>
    </Layout>
  );
};

export default HowItWorksPage;
