import MemoriesRipSection from "@/components/client/rip/memories";
import Layout from "../../../../components/layout/layout";

const MemoriesPage = () => {
  return (
    <Layout
      title="Bilembo - Souvenirs"
      content="Commandez votre médaillon Bilembo contenant un QR code unique ..."
    >
      <MemoriesRipSection />
    </Layout>
  );
};

export default MemoriesPage;
