<script>
  import { advantage } from "../assets/DATA/data";

  export default {
    name: "Advantage",
    data() {
      return {
        advantage,
      }
    },
  }
</script>

<template>
  <section class="advantage">
    <div class="container advantage__container">
      <div class="advantage__elements">
        <div v-for="(adv, index) in advantage" :key="index" class="advantage__elements-element f-center">
          <div class="advantage__elements-element_top">
            <h1>{{ adv.title }}</h1>
            <img :src="adv.img" :alt="adv.title">
          </div>
          <p>{{ adv.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>