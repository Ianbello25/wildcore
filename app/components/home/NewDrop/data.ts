export type DropItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  align: "left" | "right";
};

export const drops: DropItem[] = [
  {
    id: 1,
    title: "RAGE SYSTEM",
    subtitle: "Compression Series",
    description:
      "Compresión diseñada para acompañar cada repetición. Una segunda piel construida alrededor de fuerza, intensidad y rendimiento.",
    image: "/images/drop/rage-system-campaign.jpg",
    align: "right",
  },

  {
    id: 2,
    title: "BAGGY ANIME",
    subtitle: "Oversized Streetwear",
    description:
      "Siluetas amplias, estética underground y actitud sin restricciones. Una colección construida entre el entrenamiento y la cultura streetwear.",
    image: "/images/drop/baggy-anime-campaign.jpg",
    align: "left",
  },

  {
    id: 3,
    title: "BUILT TO MOVE",
    subtitle: "Rage System Performance",
    description:
      "Diseñado para moverse contigo. Rendimiento, identidad y presencia dentro y fuera del gimnasio.",
    image: "/images/drop/rage-system-performance.jpg",
    align: "right",
  },
];
