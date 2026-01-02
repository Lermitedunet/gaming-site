export type Game = {
  id: number;
  name: string;
  slug: string;
  platforms: string[];
  genres: string[];
  cover: string; // chemin image dans /public
};

export const games: Game[] = [
  {
    id: 1,
    name: "Valheim",
    slug: "valheim",
    platforms: ["PC"],
    genres: ["Survie", "Coop"],
    cover: "/covers/valheim.jpg",
  },
  {
    id: 2,
    name: "Palworld",
    slug: "palworld",
    platforms: ["PC", "Xbox"],
    genres: ["Survie", "Coop"],
    cover: "/covers/palworld.jpeg",
  },
  {
    id: 3,
    name: "Call of Duty",
    slug: "call-of-duty",
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["FPS"],
    cover: "/covers/cod.jpg",
  },
];
