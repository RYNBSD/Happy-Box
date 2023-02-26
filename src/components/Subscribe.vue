<script>
  import { letter } from '../constants/image';

  export default {
    name: "Subscribe",
    data() {
      return {
        letter,
        email: "",
      }
    },
    methods: {
      subscribe() {
        alert(this.email);
      }
    }
  }
</script>

<template>
  <section class="subscribe">
    <div class="container subscribe__container f-center">
      <div class="subscribe__discount">
        <img :src="letter" alt="letter">
        <h3>-10%</h3>
      </div>
      <h1>Sign up now to get 10% off your first order</h1>
      <form @submit.prevent="subscribe" class="subscribe__form">
        <input type="email" placeholder="Enter your email address" v-model="email" required>
        <button type="submit">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </form>
    </div>
  </section>
</template>