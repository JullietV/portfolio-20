<template>
  <article class="portfolio-post">
    <div class="portfolio-post-container">
      <h3 class="portfolio-post-title">{{title}}</h3>
      <p class="portfolio-post-date">{{date}}</p>
    </div>
    <div class="portfolio-post-thumb">
      <img src="/posts/keyboard_apple_magic.jpg" alt="Keyboard Apple Magic" />
    </div>
    <div class="portfolio-post-container">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: {
      type: String,
      default: "Título"
    },
    date: {
      type: String,
      default: "05 de Julio de 2020"
    },
    link: {
      default: "/"
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-post {
  &-container {
    width: 70%;
    margin: 0 auto;
  }
  &-title {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 54px;
    text-align: center;
    margin-bottom: 10px;
  }

  &-date {
    text-align: center;
    margin-bottom: 30px;
  }

  &-thumb {
    height: 300px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 30px;

    img {
      width: 100%;
      transform: translate(0, -50%);
    }
  }
}

@media screen and (max-width: 768px) {
    .portfolio-post-thumb {
        height: 100px
    }
}
</style>