"use client";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { ButtonLink } from "../button";
import { useRouter } from "next/navigation";

export function DefaultSidebar() {
  const router = useRouter();

  return (
    <div className="h-[78vh] w-[85vw] p-2 text-primary flex flex-col gap-3 z-90">
      <List>
        <div className="font-bold p-2">
          <a href="/qui_sommes_nous">Qui somme-nous</a>
        </div>
        <div className="font-bold p-2">
          <a href="/comment_ca_marche">Comment ça marche</a>
        </div>
        <div className="p-2">
          <ButtonLink
            handleClick={() => router.push("/contact")}
            variant="contained"
          >
            Contactez-nous
          </ButtonLink>
        </div>
      </List>
    </div>
  );
}
