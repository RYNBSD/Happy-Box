<script>
  import { logo } from '../constants/image';

  export default {
    name: "Footer",
    data() {
      return {
        logo,
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
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__left">
        <img :src="logo" alt="logo">
        <p>Pellentesque tempor felis interdum ultrices tincidunt enim integer diam nisi viverra </p>
      </div>
      <div class="footer__mid">
        <h2>Subscribe us</h2>
        <form class="footer__mid-form" @submit.prevent="subscribe">
          <font-awesome-icon icon="fa-regular fa-envelope" />
          <input type="email" placeholder="Enter your email address" v-model="email" required>
          <button type="submit">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </button>
        </form>
      </div>
      <ul class="footer__right">
        <li>
          <p>City. Street Name, 88</p>
          <font-awesome-icon icon="fa-solid fa-location-crosshairs" />
        </li>
        <li>
          <p>+999 99 1234 5678</p>
          <font-awesome-icon icon="fa-solid fa-comment-dots" />
        </li>
        <li>
          <p>name.email@email.com</p>
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </li>
      </ul>
    </div>
    <div class="footer__bottom">
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
    </div>
  </footer>
</template>