<template>
    <div class="page index px-11 md:px-48 xl:px-72 text-[#fff]">
        <div class="index__profile p-8 w-full h-screen rounded-3xl flex flex-col grid content-center gap-8">
            <div class="flex flex-col-reverse md:flex-row content-around justify-between my-1 gap-4">
                <h1 class="bg font-semibold mx-auto md:mx-0 text-xl md:text-3xl my-auto">
                    Chotiwut
                </h1>
                <div class="pp mx-auto md:mx-0" alt="Discover Nuxt 3"> </div>
            </div>
            <div class="">
                <p>Hello my name is Chotiwut. I passionate in technology field focusing in Front-End Web Developer with 17 months experience. Familiar and having knowledge with Vue.js, Tailwind.css, Bootstrap, proficiency with HTML, CSS, Javascript, and . Have eagerness and curiosity to learn new things.</p>
            </div>
        </div>
        <div class="index__skill mb-8 p-8 w-full h-[260px] bg-[#171f3e] border-2 border-[#2677eb] rounded-3xl">
            <p class="text-center text-2xl">Skills</p>
            <div class="flex flex-col justify-between">
                <div class="index__skill--html flex flex-col justify-between" v-for="item in skills" key="index">
                    <p class="text-center">{{item.skill}}</p>
                    <div class="w-full h-[10px] bg-[#1f1f1f] rounded-md">
                        <div class="h-[10px] bg-[#fff] rounded-md" :style="{'width':item.percentage+'%'}">
                        </div>
                    </div>
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
                <div class="project--1 bg-[#1f1f1f] w-[100%] h-[120px] rounded-xl p-3" @click="project1= !project1">
                    <p class="text-[32px]">1</p>
                    <p>Per</p>
                </div>
                <div class="project--1 bg-[#1f1f1f] w-[100%] h-[120px] rounded-xl p-3" @click="project2= !project2">
                    <p class="text-[32px]">2</p>
                    <p>Per</p>
                </div>
                <div class="project--1 bg-[#1f1f1f] w-[100%] h-[120px] rounded-xl p-3" @click="project3= !project3">
                    <p class="text-[32px]">3</p>
                    <p>Per</p>
                </div>
                <div class="project--1 bg-[#1f1f1f] w-[100%] h-[120px] rounded-xl p-3" @click="project4= !project4">
                    <p class="text-[32px]">4</p>
                    <p>Per</p>
                </div>
            </div>
        </div>
        <div class="index__project--modal">
            <div class="project--1 project fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl flex flex-col justify-between" v-if="project1">
                <div>
                    <p @click="project1= !project1">EVA</p>
                    <!-- <p class="py-0.5 px-3 bg-cyan-600 w-fit rounded-2xl">vue</p> -->
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>press 1st text for closing the tab</p>
                </div>
                <a href="https://essentials-hmtest22.vercel.app/" target="_blank" class="text-center sm:w-[50%] md:w-[25%] mx-auto px-2 py-1 bg-gray-200 rounded-2xl">site</a>
            </div>
            <div class="project--1 project fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl" v-if="project2">
                <p @click="project2= !project2">wow</p>
                <p>press 1st text for closing the tab</p>
            </div>
            <div class="project--1 project fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl" v-if="project3">
                <p @click="project3= !project3">wow</p>
                <p>press 1st text for closing the tab</p>
            </div>
            <div class="project--1 project fixed top-[50%] left-[50%] bg-[#fff] text-[#000000] w-[75%] h-[75%] p-8 rounded-3xl" v-if="project4">
               <p @click="project4= !project4">wow</p>
               <p>press 1st text for closing the tab</p>
            </div>
        </div>
        <p class="text-center mt-12 py-1 bg-gray-700 rounded-t-3xl">Chotiwut © 2023</p>
    </div>
</template>
<style lang="scss">
.bg{
    padding: 12px 20px;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0px );
    -webkit-backdrop-filter: blur( 0px );
    border-radius: 60px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.project{
    transform: translate(-50%, -50%);
}
.w-fit{
    width: fit-content;
}
.pp{
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background-image: url("../public/choti.jpg");
    background-position: center;
    background-size: 100%;
}
</style>
<script setup>
const props = defineProps({
  project1: false,
  project2: false,
  project3: false,
  project4: false
})

const Experience = ref([
  {company: 'Kompas', position: 'Front-end Developer', time: 'September 2022 - Present' },
  {company: 'HashMicro', position: 'Front-end Developer', time: 'February 2022 - June 2022' }
])

const skills = ref([
  {skill:'HTML', percentage: 80},
  {skill:'CSS', percentage: 60},
])


</script>