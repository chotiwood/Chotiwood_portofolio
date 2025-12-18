import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Jejak Kuliner Nusantara Presiden Soekarno",
    description:
      "To commemorate Indonesia's anniversary, a Tutur Visual Jejak Kuliner Nusantara Presiden Soekarno was created. Developed several components including Catalog component, Recipe Complete component and CreditandRecommender component.",
    tags: ["Vue.js", "Sass"],
    image: "/projects/kuliner.jpg",
    link: "https://interaktif.kompas.id/baca/masakan-nusantara-kemerdekaan/",
    featured: true,
    completionDate: "2023-08",
    client: "Kompas",
    role: "Frontend Developer",
  },
  {
    id: 2,
    title: "Seberapa Besar Pekerjaan Anda Terpapar Kecerdasan Artifisial",
    description:
      "A project created to commemorate Kompas's anniversary with the theme of artificial intelligence. Developed Catalog component and content component.",
    tags: ["Vue.js", "Sass"],
    image: "/projects/ai-impact.jpg",
    link: "https://interaktif.kompas.id/baca/kecerdasan-buatan-industri-kerja-dan-profesi/",
    featured: true,
    completionDate: "2023-06",
    client: "Kompas",
    role: "Frontend Developer",
  },
  {
    id: 3,
    title: "Penantian Abadi Para Tahanan PBB",
    description:
      "A project created to visualize stories. Developed Opening section, content component with animations, and CreditandRecommender component.",
    tags: ["Vue.js", "Sass"],
    image: "/projects/pbb.jpg",
    link: "https://interaktif.kompas.id/baca/kisah-keluarga-imigran-tahanan-pbb/",
    completionDate: "2023-05",
    client: "Kompas",
    role: "Frontend Developer",
  },
  {
    id: 4,
    title: "Apa yang Anda Lakukan Saat Terjadi Gempa?",
    description:
      "A project created to commemorate Disaster Preparedness Day. Developed Home simulation, Mainmenu component, Finish Scene component, and Recommender component.",
    tags: ["Vue.js", "Sass"],
    image: "/projects/gempa.jpg",
    link: "https://interaktif.kompas.id/baca/siap-siaga-hadapi-bencana-gempa/",
    completionDate: "2023-04",
    client: "Kompas",
    role: "Frontend Developer",
  },
  {
    id: 5,
    title: "Permainan Tradisional Game",
    description:
      "A project created to increase people awareness of traditional Indonesian games. Developed a marble game and several components including TotalScore component and Recommender component.",
    tags: ["Vue.js", "Phaser", "Sass"],
    image: "/projects/tradisional.jpg",
    link: "https://interaktif.kompas.id/baca/permainan-populer-anak-indonesia/",
    completionDate: "2023-03",
    client: "Kompas",
    role: "Frontend Developer",
  },
  {
    id: 6,
    title: "Pilih Jagoanmu pada Pesta Bola Qatar",
    description:
      "A project created to enliven the Qatar World Cup. Developed Header, Banner section, Golden Choice component, and Recommender Section.",
    tags: ["Vue.js", "Sass"],
    image: "/projects/qatar.jpg",
    link: "https://interaktif.kompas.id/baca/prediksi-jagoan-pesta-bola-qatar/",
    completionDate: "2022-11",
    client: "Kompas",
    role: "Frontend Developer",
  },
  {
    id: 7,
    title: "Menjelajah Jawa-Bali dengan Mobil Listrik",
    description:
      "A project to increase people awareness of using electric vehicles. Developed Opening section, Credit component, Share component and Recommender component.",
    tags: ["Vue.js", "Sass"],
    image: "/projects/mobil-listrik.jpg",
    link: "https://interaktif.kompas.id/baca/liburan-mobil-listrik-jakarta-bali/",
    completionDate: "2022-10",
    client: "Kompas",
    role: "Frontend Developer",
  },
];

// Helper functions to filter projects
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
export const getProjectById = (id: number) =>
  projects.find((project) => project.id === id);
export const getProjectsByTag = (tag: string) =>
  projects.filter((project) => project.tags.includes(tag));

// Get unique tags from all projects
export const getAllTags = () => {
  const tags = projects.reduce(
    (acc, project) => [...acc, ...project.tags],
    [] as string[]
  );
  return Array.from(new Set(tags));
};
