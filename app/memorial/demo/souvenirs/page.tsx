import MemoriesSection from "../../../../components/client/demo/memories";
import Layout from "../../../../components/layout/layout";

const MemoriesPage = () => {
  return (
    <Layout
      title="Bilembo - Souvenirs"
      content="Commandez votre médaillon Bilembo contenant un QR code unique ..."
    >
      <MemoriesSection />
    </Layout>
  );
};

export default MemoriesPage;
