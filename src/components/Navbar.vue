<script>
  import { logo } from "../constants/image"

  export default {
    name: "Navbar",
    data() {
      return {
        logo,
        showMenu: false,
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
        console.log(this.showMenu);
      }
    }
  }
</script>

<template>
  <nav class="nav">
    <div class="container nav__container">
      <div class="nav__logo">
        <img :src="logo" alt="logo">
      </div>
      <ul class="nav__list" :class="{show: showMenu}">
        <li class="nav__list-item close">
          <button type="button" @click="toggleMenu">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
        </li>
        <li class="nav__list-item">
          <a class="nav__list-item_link" href="#">advantage</a>
        </li>
        <li class="nav__list-item">
          <a class="nav__list-item_link" href="#">experiences</a>
        </li>
        <li class="nav__list-item">
          <a class="nav__list-item_link" href="#">delivery</a>
        </li>
        <li class="nav__list-item">
          <a class="nav__list-item_link" href="#">tastes</a>
        </li>
        <li class="nav__list-item">
          <a class="nav__list-item_link" href="#">reviews</a>
        </li>
        <li class="nav__list-item">
          <p class="nav__phone">+999 99 1234 5678</p>
        </li>
      </ul>
      <button type="button" @click ="toggleMenu" class="nav__menu">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>
  </nav>
</template>