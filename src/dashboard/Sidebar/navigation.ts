import { FaUtensils, FaCog, FaFish } from "react-icons/fa";

export const NAVIGATION = [
  {
    id: 1,
    title: "Lagos",
    link: "/dashboard/lagos",
    icon: FaUtensils,
  },
  {
    id: 2,
    title: "Ajustes",
    link: "#",
    icon: FaCog,
    children: [
      {
        id: 3,
        title: "Tipos de peces",
        link: "/dashboard/settings/type-fish",
        icon: FaFish,
      },
      {
        id: 4,
        title: "Tipos de peces 2",
        link: "/dashboard/settings/type-fis2",
        icon: FaFish,
      },
    ],
  },
];
