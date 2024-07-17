import MemorialSection from "@/components/client/rip";
import Layout from "@/components/layout/layout";

const MemorialPage = () => {
  return (
    <Layout
      title="Bilembo - Léonard Baruti Kasongo"
      content="Commandez votre médaillon Bilembo contenant un QR code unique ..."
    >
      <main>
        <MemorialSection />
      </main>
    </Layout>
  );
};

export default MemorialPage;
