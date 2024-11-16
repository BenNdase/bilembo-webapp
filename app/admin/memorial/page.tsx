import AdminMemorialSection from "@/components/admin/memorial";
import Layout from "@/components/layout/layout";

export default function AdminMemorial() {
  return (
    <Layout
      title="Bilembo - Home"
      content="Parce que chaque vie qui passe sur cette terre laisse des traces ..."
    >
      <main className="">
        <AdminMemorialSection />
      </main>
    </Layout>
  );
}
