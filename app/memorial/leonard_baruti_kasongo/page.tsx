import MemorialSection from "@/components/client/rip";
import TabsRipBaruti from "@/components/client/rip/baruti_tabs";
import Layout from "@/components/layout/layout";
import { datas } from "@/services/data/data";

const MemorialPage = () => {
  return (
    <Layout
      title="Bilembo"
      content="Commandez votre médaillon Bilembo contenant un QR code unique ..."
    >
      <main>
        {datas.map(
          (data, index) =>
            data.slug === "leonard_baruti_kasongo" && (
              <MemorialSection
                key={index}
                profile_image={data.profile_image}
                name={data.name}
                firstname={data.firstname}
                lastname={data.lastname}
                birth={data.birth}
                birthplace={data.birthplace}
                deceased={data.deceased}
                deceasedplace={data.deceasedplace}
                profession={data.profession}
                nationality={data.nationality}
                summary={data.summary}
                youth_training={data.youth_training}
                career={data.career}
                images={data.images}
                cause_death={data.cause_death}
                epilogue={data.epilogue}
              />
            )
        )}
      </main>
    </Layout>
  );
};

export default MemorialPage;
