<script>
  import { vectors, character } from '../constants/image';

  export default {
    name: "Reviews",
    data() {
      return {
        vectors,
        character,
      }
    },
  }
</script>

<template>
  <section class="reviews">
    <div class="container reviews__container">
      <img :src="vectors" alt="vectors">
      <div class="reviews__review">
        <div class="reviews__review-author">
          <div class="reviews__review-author_info d-flex f-center">
            <img :src="character" alt="character">
            <p>Elli Marcus</p>
          </div>
          <div class="reviews__review-author_media">
            <font-awesome-icon :icon="['fab', 'instagram']" />
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </div>
        </div>
        <div class="reviews__review-msg">
          <p>Scelerisque enim, faucibus. Morbi malesuada curabitur commodo proin cursus quam adipiscing egestas. Ipsum integer diam magna lacus nibh feugiat et dolor nibh. Accumsan integer gravida egestas ut. Nunc, pellentesque tempor felis interdum ultrices tincidunt enim integer. Diam nisi viverra non velit. Et vitae semper ligula mi viverra felis, faucibus risus. In id pulvinar tristique proin tincidunt bibendum. Ac magnis risus a quis.</p>
        </div>
        <div class="reviews__review-more">
          <button type="button">Read more</button>
        </div>
      </div>
    </div>
  </section>
</template>