import React from "react";
import photo1 from "@/assets/demo/memories/businessman.jpg";
import photo2 from "@/assets/demo/memories/latino.jpg";
import photo3 from "@/assets/demo/memories/latino.jpg";
import Image from "next/image";
import { Memorial } from "@/services/types/data";

export type Props = {
  className?: string;
  slug: string;
  profile_image: string;
  name: string;
  lastname: string;
  firstname: string;
  summary: string; // Assure-toi que 'summary' est bien inclus dans Props
};

const CardAdminMemorial = ({
  slug,
  profile_image,
  name,
  firstname,
  lastname,
  summary,
}: Props) => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={`/memorial/${slug}`}>
          <Image
            className="rounded-t-lg"
            width="900"
            height="900"
            src={profile_image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href={`/memorial/${slug}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name} {lastname} {firstname}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {summary.substring(0, 100)} ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAdminMemorial;
