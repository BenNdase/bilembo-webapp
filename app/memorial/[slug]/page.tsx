import MemorialSection from "@/components/client/rip";
import Layout from "@/components/layout/layout";
import { datas } from "@/services/data/data";
import { Memorial } from "@/services/types/data";
import { useRouter } from "next/navigation";

interface MemorialPageProps {
  memorial: Memorial;
}

const getMemorialData = async (slug: string): Promise<Memorial | undefined> => {
  return datas.find((data) => data.slug === slug);
};

const MemorialPage = async ({ params }: { params: { slug: string } }) => {
  const memorial = await getMemorialData(params.slug);

  if (!memorial) {
    return (
      <div>
        <h1>Not Found</h1>
        <p>The requested page could not be found.</p>
      </div>
    );
  }

  return (
    <Layout
      title="Bilembo"
      content="Commandez votre médaillon Bilembo contenant un QR code unique ..."
    >
      <main>
        <MemorialSection
          profile_image={memorial.profile_image}
          name={memorial.name}
          firstname={memorial.firstname}
          lastname={memorial.lastname}
          birth={memorial.birth}
          birthplace={memorial.birthplace}
          deceased={memorial.deceased}
          deceasedplace={memorial.deceasedplace}
          profession={memorial.profession}
          nationality={memorial.nationality}
          summary={memorial.summary}
          youth_training={memorial.youth_training}
          career={memorial.career}
          images={memorial.images}
          cause_death={memorial.cause_death}
          epilogue={memorial.epilogue}
        />
      </main>
    </Layout>
  );
};

export default MemorialPage;
