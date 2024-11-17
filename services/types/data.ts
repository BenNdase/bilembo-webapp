interface Souvenir {
  image: string;
  date: string;
  title: string;
  description: string;
}

export interface Memorial {
  id: number;
  slug: string;
  profile_image: string;
  name: string;
  firstname: string;
  lastname: string;
  birth: string;
  birthplace: string;
  deceased: string;
  deceasedplace: string;
  profession: string;
  nationality: string;
  summary: string;
  youth_training: string;
  career: string;
  images: string[];
  souvenirs?: {
    image?: string;
    videos?: string; // Si `videos` peut être une URL ou un tableau, ajustez ici
    title: string;
    description: string;
  }[];
  cause_death: string;
  epilogue: string;
}
