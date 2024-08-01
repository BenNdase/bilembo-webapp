import BaseContainer from "@/components/layout/container";
import CardAdminMemorial from "./card";
import { datas } from "@/services/data/data";

const AdminMemorialSection = () => {
  return (
    <BaseContainer>
      {datas.map((data) => (
        <CardAdminMemorial
          key={data.slug}
          slug={data.slug}
          profile_image={data.profile_image}
          name={data.name}
          lastname={data.lastname}
          firstname={data.firstname}
          summary={data.summary}
        />
      ))}
    </BaseContainer>
  );
};

export default AdminMemorialSection;
