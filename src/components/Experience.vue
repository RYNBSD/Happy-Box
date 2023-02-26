<script>
  import { experience } from "../assets/DATA/data";
  import { experience as experienceImg } from "../constants/image";

  export default {
    name: "Experience",
    data() {
      return {
        experience,
        experienceImg,
      }
    },  
  }
</script>

<template>
  <section class="experience">
    <div class="container experience__container">
      <div class="experience__left">
        <div class="experience__left-bg"></div>
        <img :src="experienceImg" alt="experience image">
      </div>
      <div class="experience__right">
        <h1>Create positive emotional experiences around your</h1>
        <div class="experience__right-elements">
          <div v-for="(exp, index) in experience" :key="index" class="experience__right-elements_element">
            <div class="experience__right-elements_element-icon">
              <img :src="exp.icon" :alt="exp.title">
            </div>
            <div class="experience__right-elements_element-info">
              <h2>{{ exp.title }}</h2>
              <p>{{ exp.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>