import VisionAndGoalCard from "./card";
import GoalIcon from "@/assets/vision_goal/presse-papiers.png";
import VisonIcon from "@/assets/vision_goal/vision-strategique.png";
import BaseContainer from "../../../layout/container";

const VisionAndGoalSection = () => {
  return (
    <BaseContainer className="flex flex-col gap-3 md:flex-row">
      <div className="md:w-[50%]">
        <VisionAndGoalCard
          icon={GoalIcon}
          alt="Notre objectif"
          title="Notre objectif"
          description="L'objectif de Bilembo In Memory est de permettre aux familles de se remémorer les souvenirs de leurs proches à tout moment, et de garder leur mémoire vivante pour les générations futures."
        />
      </div>
      <div className="md:w-[50%]">
        <VisionAndGoalCard
          icon={VisonIcon}
          alt="Notre vision et mission"
          title="Notre vision et mission"
          description="Bilembo In Memory est une entreprise qui s'engage à rendre la mémoire des êtres chers disparus accessible et indéfiniment. Nous pensons que la mémoire est un bien précieux qui doit être préservé pour les générations futures. Et qui a pour vision de rendre la mémoire des êtres chers disparus accessible et indéfiniment"
        />
      </div>
    </BaseContainer>
  );
};

export default VisionAndGoalSection;
