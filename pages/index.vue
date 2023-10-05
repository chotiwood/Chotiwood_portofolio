<template>
  <div class="page index px-11 md:px-48 xl:px-72 text-[#fff] scroll-auto">
    <div
      class="index__profile p-8 w-full h-screen rounded-3xl flex flex-col grid content-center md:gap-8 gap-4"
    >
      <div
        class="flex flex-col-reverse md:flex-row content-around justify-between md:my-1 gap-4"
      >
        <h1
          class="cursor-pointer glass font-semibold mx-auto md:mx-0 text-xl md:text-3xl my-auto hover:text-3xl md:hover:ml-4 duration-300 ease-in-out"
        >
          Chotiwut
        </h1>
        <div
          class="pp mx-auto md:mx-0 hover:translate-y-[-16px] duration-300 ease-in-out"
          alt="Chotiwut"
        ></div>
      </div>
      <div class="">
        <p>
          Hello my name is Chotiwut. I passionate in technology field focusing
          in Front-End Web Developer with 17 months experience. Familiar and
          having knowledge with Vue.js, Tailwind.css, Bootstrap, proficiency
          with HTML, CSS, Javascript, and Have eagerness and curiosity to learn
          new things.
        </p>
      </div>
      <div
        class="flex flex-col md:flex-row md:justify-start justify-center gap-2"
      >
        <a
          class="w-full md:w-[120px] h-[40px] flex justify-center grid content-center rounded-xl bg-[#171f3e]"
          target="_blank"
          href="https://www.linkedin.com/in/chotiwut-74a335184/"
          >LinkedIn</a
        >
        <a
          class="w-full md:w-[120px] h-[40px] flex justify-center grid content-center rounded-xl bg-[#171f3e]"
          target="_blank"
          href="https://mail.google.com/mail/u/0/?fs=1&to=chotiwut11@gmail.com&su=SUBJECT&body=BODY&tf=cm"
        >
          Gmail</a
        >
      </div>
    </div>
    <div
      class="index__skill mb-8 p-8 w-full md:h-[260px] h-[320px] bg-[#171f3e] border-2 border-[#2677eb] rounded-3xl flex flex-col"
    >
      <p class="text-center text-2xl">Skills</p>
      <div class="md:flex md:justify-between my-auto grid grid-cols-4 gap-4">
        <div
          class="index__skill-item flex flex-col justify-between text-transparent hover:text-gray-400 duration-300"
          v-for="item in skills"
          key="index"
        >
          <img :src="item.img" class="w-[40px] m-auto mb-2 bounce" />
          <p class="text-center text-[11px] md:text-[16px] duration-300">
            {{ item.skill }}
          </p>
          <!-- <div class="w-full h-[10px] bg-[#1f1f1f] rounded-md">
            <div
              class="h-[10px] bg-[#fff] rounded-md"
              :style="{ width: item.percentage + '%' }"
            ></div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="index__experience mb-8 p-2 w-full grid gap-10">
      <p class="text-center text-2xl">Experience</p>
      <div class="index__experience-1" v-for="item in Experience" key="index">
        <p class="text-xl border-b-2 border-cyan-700">{{ item.company }}</p>
        <p class="text-lg mb-1">{{ item.position }}</p>
        <p class="text-xs">{{ item.time }}</p>
      </div>
    </div>
    <div class="index__project">
      <p class="text-center text-2xl my-8">Project</p>
      <div class="grid grid-cols-2 gap-8">
        <a class="bg-[#1f1f1f] w-[100%] max-h-[200px] rounded-xl p-3 overflow-auto cursor-pointer" v-for="(asd) in myProject" :key="key" :href="asd.link" target="_blank">
          <p class="text-[20px] text-extrabold">{{ asd.title }}</p>
          <p class="text-[14px]">{{ asd.desc }}</p>
          <p class="text-[12px] opacity-70">{{ asd.time }}</p>
        </a>
        <!-- <div
          class="project--1 bg-[#1f1f1f] w-[100%] h-[120px] rounded-xl p-3"
          @click="project1 = !project1"
        >
          <p class="text-[32px]">1</p>
          <p>Per</p>
        </div>
        <div
          class="project--1 bg-[#1f1f1f] w-[100%] h-[120px] rounded-xl p-3"
          @click="project2 = !project2"
        >
          <p class="text-[32px]">2</p>
          <p>Per</p>
        </div>
        <div
          class="project--1 bg-[#1f1f1f] w-[100%] h-[120px] rounded-xl p-3"
          @click="project3 = !project3"
        >
          <p class="text-[32px]">3</p>
          <p>Per</p>
        </div>
        <div
          class="project--1 bg-[#1f1f1f] w-[100%] h-[120px] rounded-xl p-3"
          @click="project4 = !project4"
        >
          <p class="text-[32px]">4</p>
          <p>Per</p>
        </div> -->
      </div>
    </div>
    <div class="index__project--modal">
      <div
        class="project--1 project fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl flex flex-col justify-between"
        v-if="project1"
      >
        <div>
          <p @click="project1 = !project1">EVA</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>press 1st text for closing the tab</p>
        </div>
        <a
          href="https://essentials-hmtest22.vercel.app/"
          target="_blank"
          class="text-center sm:w-[50%] md:w-[25%] mx-auto px-2 py-1 bg-gray-200 rounded-2xl"
          >site</a
        >
      </div>
      <div
        class="project--1 project fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl"
        v-if="project2"
      >
        <p @click="project2 = !project2">wow</p>
        <p>press 1st text for closing the tab</p>
      </div>
      <div
        class="project--1 project fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl"
        v-if="project3"
      >
        <p @click="project3 = !project3">wow</p>
        <p>press 1st text for closing the tab</p>
      </div>
      <div
        class="project--1 project fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl"
        v-if="project4"
      >
        <p @click="project4 = !project4">wow</p>
        <p>press 1st text for closing the tab</p>
      </div>
    </div>
    <!-- <div>
      <button
        v-for="(project, index) in projects"
        :key="index"
        @click="openModal(project)"
      >
        Open {{ project.name }} Modal
      </button>

      Modals v-if="project.open"
      <div
        v-for="project in projects"
        :key="project.name"
        v-if="projects.open"
        class="fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl flex flex-col justify-between"
      >
        {{ project.name }} Modal Content
        <button @click="closeModal(project)">Close</button>
      </div>
    </div> -->
    <p class="text-center mt-12 py-1 bg-gray-700 rounded-t-3xl">
      Chotiwut © 2023
    </p>
  </div>
</template>
<style lang="scss">
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.glass {
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 60px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.bounce:hover {
  animation: bounce 1s infinite alternate;
}
.project {
  transform: translate(-50%, -50%);
}
.w-fit {
  width: fit-content;
}
.pp {
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-image: url("../public/choti.jpg");
  background-position: center;
  background-size: 100%;
}
.index__skill-item {
  color: transparent;
}
.index__skill-item:hover {
  color: bisque;
}
</style>
<script setup>
const props = defineProps({
  project1: false,
  project2: false,
  project3: false,
  project4: false,
});

// const projects = [
//   { name: "Project 1", open: false },
//   { name: "Project 2", open: false },
//   { name: "Project 3", open: false },
//   { name: "Project 4", open: false },
// ];

const myProject = ref([
  {
    title: "Jejak Kuliner Nusantara Presiden Soekarno | Tutur Visual by Kompas",
    link: "https://interaktif.kompas.id/baca/masakan-nusantara-kemerdekaan/",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book.",
    time: "August",
  },
  {
    title: "Seberapa Besar Pekerjaan Anda Terpapar Kecerdasan Artifisial | Tutur Visual by Kompas",
    link: "https://interaktif.kompas.id/baca/kecerdasan-buatan-industri-kerja-dan-profesi/",
    desc: "",
    time: "June",
  },
  {
    title: "Penantian Abadi Para Tahanan PBB | Tutur Visual by Kompas",
    link: "https://interaktif.kompas.id/baca/kisah-keluarga-imigran-tahanan-pbb/",
    desc: "",
    time: "Mei",
  },
  {
    title: "Apa yang Anda Lakukan Saat Terjadi Gempa? | Tutur Visual by Kompas",
    link: "https://interaktif.kompas.id/baca/siap-siaga-hadapi-bencana-gempa/",
    desc: "",
    time: "April",
  },
  {
    title: "Yuk, Mengenal Permainan Tradisional Lewat Gim Berikut Ini | Tutur Visual by Kompas",
    link: "https://interaktif.kompas.id/baca/permainan-populer-anak-indonesia/",
    desc: "",
    time: "March",
  },
  {
    title: "Pilih Jagoanmu pada Pesta Bola Qatar | Tutur Visual by Kompas",
    link: "https://interaktif.kompas.id/baca/prediksi-jagoan-pesta-bola-qatar/",
    desc: "",
    time: "November",
  },
  {
    title: "Menjelajah Jawa-Bali dengan Mobil Listrik | Tutur Visual by Kompas",
    link: "https://interaktif.kompas.id/baca/liburan-mobil-listrik-jakarta-bali/",
    desc: "",
    time: "October",
  },
])

const Experience = ref([
  {
    company: "Harian Kompas",
    position: "Front-end Developer",
    time: "September 2022 - Present",
  },
  {
    company: "PT HashMicro Solusi Indonesia",
    position: "Front-end Developer",
    time: "February 2022 - June 2022",
  },
]);

const skills = ref([
  {
    skill: "HTML",
    img: "../public/HTML.png",
  },
  {
    skill: "CSS",
    img: "../public/CSS.png",
  },
  {
    skill: "JavaScript",
    img: "../public/JS.png",
  },
  {
    skill: "Sass",
    img: "../public/Sass.png",
  },
  {
    skill: "Tailwind",
    img: "../public/tailwind.webp",
  },
  {
    skill: "Bootstrap",
    img: "../public/Bootstrap.png",
  },
  {
    skill: "Vue.js",
    img: "../public/Vue.png",
  },
  {
    skill: "Nuxt.js",
    img: "../public/Nuxt.png",
  },
]);
</script>
