<template>
  <div class="portfolio-home">
    <div class="portfolio-container">
      <div class="portfolio-home-text-wrapper">
        <h1 class="portfolio-title">
          {{ $t('home.title') }}
          <vue-typer :repeat="Infinity" :text="names" />
        </h1>
        <p class="portfolio-introduction">
          {{ $t('home.introduction') }}
          <strong>{{ $t('home.adjective') }}</strong>
        </p>
        <ul class="portfolio-habilities-list">
          <li>
            <img :src="lightThemeActive ? '/vue_dark.svg' : '/vue.svg'" alt="VueJS" />
          </li>
          <li>
            <img :src="lightThemeActive ? '/Js_dark.svg' : '/Js.svg'" alt="Javascript" />
          </li>
          <li>
            <img :src="lightThemeActive ? '/UX_dark.svg' : '/UX.svg'" alt="User Experience" />
          </li>
        </ul>
        <nav class="portfolio-home-nav">
          <ul>
            <li>
              <nuxt-link to="/">Blog</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">About me</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Projects</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="portfolio-home-image-wrapper">
      <img src="/blob.svg" class="blob" />
      <img src="/doods.svg" class="dods" />
      <img src="/jullietv.png" class="me" alt="JullietV" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  head() {
    return { title: "Julliet V." };
  },
  data() {
    return {
      names: ["Julliet V!", "Julls!", "Jénnifer!"]
    };
  },
  computed: {
    ...mapState({
      lightThemeActive: state => state.lightThemeActive
    })
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.light {
  .portfolio-introduction strong {
    color: var(--dark-turquoise);
  }

  .portfolio-title {
    color: var(--purple);
  }
}

.portfolio {
  &-home {
    height: 100vh;
    &-text-wrapper {
      padding-top: 177px;
    }
  }
  &-title {
    font-size: 4rem;
    line-height: 6rem;
    color: var(--turquoise);
    font-family: "Poppins", sans-serif;
  }

  &-introduction {
    font-size: 2.25rem;
    line-height: 2.625rem;
    margin-bottom: 15px;

    strong {
      color: var(--purple);
    }
  }

  &-habilities-list {
    display: inline-flex;
    margin-bottom: 50px;

    li {
      margin-right: 15px;
    }
  }

  &-home-nav {
    ul {
      display: inline-flex;
      li {
        margin-right: 15px;
      }
    }
  }
}

.portfolio-home-image-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;

  @keyframes blobanimation {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-30px, -30px);
    }
  }

  > img {
    height: 100%;
    position: absolute;
    right: 0;
  }

  .dods {
    animation: blobanimation alternate infinite 2s;
  }

  .me {
    height: 85%;
    bottom: 0;
    filter: brightness(0.87);
  }
}
</style>