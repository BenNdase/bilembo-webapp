import { useRouter } from "next/navigation";
import BiographyIcon from "../../ui/icons/biography";
import Multimedia from "../../ui/icons/multimedia";
import MessageIcon from "../../ui/icons/message";

const TabsRip = () => {
  const router = useRouter();

  const LinkDemo = (e: any) => {
    e.preventDefault();
    router.push(`/memorial/demo`);
  };
  const LinkDemoBiography = (e: any) => {
    e.preventDefault();
    router.push(`/memorial/demo/biographie`);
  };
  const LinkDemoMemories = (e: any) => {
    e.preventDefault();
    router.push(`/memorial/demo/souvenirs`);
  };
  const LinkDemoTestimony = (e: any) => {
    e.preventDefault();
    router.push(`/memorial/demo/temoignages`);
  };

  return (
    <div className="fixed -bottom-1 w-[100%] px-2 z-50 bg-white md:px-16">
      <hr color="#272727" />
      <div className="w-full flex justify-between items-center p-2">
        <div className="flex flex-col items-center" onClick={LinkDemoBiography}>
          <BiographyIcon />
          <p className="text-[.8rem] font-bold">Biographie</p>
        </div>
        <div className="flex flex-col items-center" onClick={LinkDemoMemories}>
          <Multimedia />
          <p className="text-[.8rem] font-bold">Souvenirs</p>
        </div>
        <div className="flex flex-col items-center" onClick={LinkDemoTestimony}>
          <MessageIcon />
          <p className="text-[.8rem] font-bold">Témoignages</p>
        </div>
      </div>
    </div>
  );
};

export default TabsRip;
