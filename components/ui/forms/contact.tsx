"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ButtonLink } from "../button";

export function ContactForm() {
  return (
    <div className="mt-6 lg:-mt-4 lg:p-10">
      <form className="">
        <div className="mb-4 flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="font-bold mb-1">Noms</label>
            <input
              type="name"
              placeholder="Votre nom complet"
              className="border border-2 border-primary-900 py-1.5 pl-6 pl-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1">Email</label>
            <input
              type="email"
              placeholder="Votre adresse email"
              className="border border-2 border-primary-900 py-1.5 pl-6 pl-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1">Sujet</label>
            <input
              type="name"
              placeholder="Votre sujet"
              className="border border-2 border-primary-900 py-1.5 pl-6 pl-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1">Message</label>
            <textarea
              placeholder="Votre message"
              className="border border-2 border-primary-900 py-1.5 pl-6 pl-3 resize-none"
              wrap="hard"
              rows={6}
            />
          </div>
        </div>
        <ButtonLink
          handleClick={(e) => {}}
          size="sm"
          className="lg:w-1/3"
          variant="contained"
        >
          Envoyer
        </ButtonLink>
      </form>
    </div>
  );
}
