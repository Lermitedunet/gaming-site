export type Article = {
  id: number;
  title: string;
  slug: string;
  gameSlug: string;
  image: string;
  tag: "Guide" | "Soluce" | "Actu";
};

export const articles: Article[] = [
  {
    id: 1,
    title: "Valheim — Bien débuter (jour 1 à 3)",
    slug: "valheim-bien-debuter",
    gameSlug: "valheim",
    image: "/articles/guide1.jpg",
    tag: "Guide",
  },
  {
    id: 2,
    title: "Palworld — Les meilleurs Pals au départ",
    slug: "palworld-meilleurs-pals",
    gameSlug: "palworld",
    image: "/articles/guide2.jpg",
    tag: "Guide",
  },
  {
    id: 3,
    title: "Call of Duty — Réglages pro (visée & sensi)",
    slug: "cod-reglages-pro",
    gameSlug: "call-of-duty",
    image: "/articles/guide3.jpg",
    tag: "Soluce",
  },
];
