<script>
  import { box4 } from "../constants/image"

  export default {
    name: "Contact",
    props: {
      toggleContact: Function
    },
    data() {
      return {
        box: box4,
        phone: "",
      }
    },
    methods: {
      submit() {
        alert(this.phone);
      }
    }
  }
</script>

<template>
  <div class="contact">
    <div class="container contact__container">
      <button @click="toggleContact" class="contact__close">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <div class="contact__content">
        <div class="contact__content-img">
          <img :src="box" alt="box">
        </div>
        <div class="contact__content-desc">
          <h1>Vehicula lobortis id mattis facilisi</h1>
          <p>Feugiat nullam bibendum. Placerat vitae ullamcorper in amet convallis dignissim lacus, aenean. Magna mollis sit odio sit aliquet facilisi</p>
          <form class="contact__content-desc_form" @submit.prevent="submit">
          <font-awesome-icon icon="fa-solid fa-phone" />
            <input
              type="text"
              v-model="phone"
              placeholder="Enter your phone number Ex: +1-123456789"
              pattern="\+[0-9]{1,3}\-[0-9]{9}"
              title="Make sure to enter a valid phone number"
              required
            >
            <button type="submit">
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>