<script>
  import Contact from "./Contact.vue"
  import { header, vectors, rounded } from '../constants/image';

  export default {
    name: "Header",
    components: {
      Contact,
    },
    data() {
      return {
        header,
        vectors,
        rounded,
        isContactOpen: false,
      }
    },
    methods: {
      toggleContact() {
        this.isContactOpen = !this.isContactOpen;
      }
    }
  }
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left d-flex">
        <h1>Make a gift with</h1>
        <div class="header__left-round d-flex f-center">
          <img :src="rounded" alt="round">
          <span>macaroons</span>
        </div>
        <p>Mollis sit odio sit aliquet facilisi. Feugiat nullam bibendum suspendisse consequat morbi et scelerisque</p>
        <button @click="toggleContact" type="button">order now</button>
      </div>
      <div class="header__right">
        <div class="header__right-bg"></div>
        <img class="header__right-vectors" :src="vectors" alt="vectors">
        <img class="header__right-img" v-bind:src="header" alt="image">
      </div>
    </div>
    <Contact
      :toggleContact="toggleContact"
      v-show="isContactOpen"
    />
  </header>
</template>