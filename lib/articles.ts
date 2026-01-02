export type Article = {
  id: number;
  title: string;
  slug: string;
  gameSlug: string;
  image: string;
  tag: "Guide" | "Soluce" | "Actu";
  content: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: "Valheim — Bien débuter (jour 1 à 3)",
    slug: "valheim-bien-debuter",
    gameSlug: "valheim",
    image: "/articles/guide1.jpg",
    tag: "Guide",
    content:
      "Objectif : survivre tes 3 premiers jours.\n\n- Fabrique une hache et un marteau.\n- Pose un camp de base proche d'une côte.\n- Priorité : lit + feu + abri.\n- Explore doucement et récupère bois/pierre.\n\nAstuce : dors la nuit pour éviter les galères au début.",
  },
  {
    id: 2,
    title: "Palworld — Les meilleurs Pals au départ",
    slug: "palworld-meilleurs-pals",
    gameSlug: "palworld",
    image: "/articles/guide2.jpg",
    tag: "Guide",
    content:
      "Les meilleurs Pals early game dépendent de ton style.\n\n- Un Pal utilitaire pour transporter.\n- Un Pal combat pour nettoyer les camps.\n- Un Pal 'travail' pour automatiser.\n\nAstuce : vise la polyvalence au début, pas le DPS pur.",
  },
  {
    id: 3,
    title: "Call of Duty — Réglages pro (visée & sensi)",
    slug: "cod-reglages-pro",
    gameSlug: "call-of-duty",
    image: "/articles/guide3.jpg",
    tag: "Soluce",
    content:
      "Réglages simples pour être plus constant.\n\n- Sensibilité : commence moyen et stabilise.\n- Deadzone : le plus bas sans drift.\n- Aim assist : actif (standard).\n- FOV : plus large pour la vision.\n\nAstuce : change un seul réglage à la fois, sinon tu te perds.",
  },
];
