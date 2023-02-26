<script>
  import { vectors, boxs, glass } from '../constants/image';

  export default {
    name: "Description",
    data() {
      return {
        items: ["scelerisque", "accumsan", "maecenas"],
        vectors,
        boxs,
        glass,        
      }
    },
    methods: {
      indexPretty(index) {
        if (index < 10) {
          return "0" + index
        }
        return index;
      }
    }
  }
</script>

<template>
  <section class="description">
    <div class="container description__container">
      <div class="description__left">
        <img :src="glass" alt="glass">
        <h1>Convallis dignissim lacus</h1>
        <div class="description__left-paragraphers">
          <p>Aliquam auctor nisl accumsan quis enim, augue rutrum tincidunt eget. Elementum blandit diam cursus ultricies. Diam nec quam vivamus ullamcorper pellentesque semper accumsan, ridiculus. Eget nam adipiscing aliquet tellus, scelerisque. Vehicula lobortis id mattis risus scelerisque nunc, nunc, laoreet.</p>
          <br>
          <p>Et aliquet aenean massa malesuada facilisi arcu pellentesque consectetur et. Sagittis, volutpat est pretium et donec. Nec cursus cursus maecenas aenean. Leo pellentesque sit lacus nec ac. Sed ipsum scelerisque posuere molestie.</p>
        </div>
        <div class="description__left-elements">
          <div v-for="(item, index) in items" :key="index" class="description__left-elements_element f-center">
            <h3>{{ indexPretty(index+1) }}</h3>
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="description__right">
        <div class="description__right-bg"></div>
        <img class="description__right-vectors" :src="vectors" alt="vectors">
        <img class="description__right-boxes" :src="boxs" alt="image of boxes">
      </div>
    </div>
  </section>
</template>