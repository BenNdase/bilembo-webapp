import MemorialDemoSection from "../../../components/client/demo";
import Layout from "../../../components/layout/layout";

const MemorialDemoPage = () => {
  return (
    <Layout
      title="Bilembo - Démo"
      content="Commandez votre médaillon Bilembo contenant un QR code unique ..."
    >
      <main>
        <MemorialDemoSection />
      </main>
    </Layout>
  );
};

export default MemorialDemoPage;
