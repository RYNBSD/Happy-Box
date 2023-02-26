<script>
  import { Navigation, Pagination } from "swiper";
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/scss';
  import 'swiper/scss/navigation';

  import { macaroons } from "../assets/DATA/data";
  import { rounded } from "../constants/image";

  export default {
    name: "Catalog",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [Navigation, Pagination],
        macaroons,
        rounded,
      }
    },
    methods: { 
      swiperElements() {
        const screenWidth = window.screen.availWidth;

        if (screenWidth > 800) {
          return 3;
        }
        else if (screenWidth <= 800 && screenWidth > 400) {
          return 2;
        }

        return 1;
      }
    },
  }
</script>

<template>
  <section class="catalog">
    <div class="container catalog__container">
      <div class="catalog__top f-center">
        <h1>Choose to your <span>
          <img :src="rounded" alt="circle">
          taste
        </span></h1>
        <p>Follis sit odio sit aliquet facilisi. Feugiat nullam bibendum suspendisse consequat morbi et scelerisque. Follis sit odio sit aliquet facilisi</p>
      </div>
      <div class="catalog__bottom">
        <swiper
          :modules="modules"
          :slides-per-group="swiperElements()"
          :slides-per-view="swiperElements()"
          :space-between="20"
          navigation
          :pagination="{ clickable: true }"
        >
          <swiper-slide
            class=catalog__bottom-slide
            v-for="(macaroon, index) in macaroons" :key="index"
          >
            <div class="catalog__bottom-slide_element">
              <img :src="macaroon.img" :alt="macaroon.type">
              <div class="catalog__bottom-slide_element-info">
                <h1>{{ macaroon.type }}</h1>
                <p>{{ macaroon.desc }}</p>
                <div class="catalog__bottom-slide_element-info_details">
                  <div class="catalog__bottom-slide_element-info_details-price f-center">
                    <h2>${{ macaroon.price.dollar }}</h2>
                    <p>for {{ macaroon.price.for }} pieces</p>
                  </div>
                  <button type="button" class="catalog__bottom-slide_element-info_details-order">
                    Order now
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>