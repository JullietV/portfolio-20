<template>
  <nav class="portfolio-fix-header">
    <div class="portfolio-container">
      <div class="portfolio-header" v-if="!isIndex">
        <img src="/nav_blob.svg" alt="JullietV blobs" />
        <h1>
          <NuxtLink to="/">
            {{ $t('home.title') }}
            <vue-typer :repeat="Infinity" :text="names" />
          </NuxtLink>
        </h1>
        <h2>Blog</h2>
      </div>
      <div v-else></div>
      <div class="portfolio-options-wrapper">
        <nav v-if="!isIndex">
          <ul class="portfolio-options-links">
            <li><nuxt-link to="/">Inicio</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          </ul>
        </nav>
        <ul class="portfolio-accessibility-options">
          <li>
            <NuxtLink
              v-if="$i18n.locale === 'es'"
              :to="`/en` + $route.fullPath"
              class="Header__Link"
              active-class="none"
              exact
            >
              <svg
                width="43"
                height="27"
                viewBox="0 0 43 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1748 15.6001H5.76855V22.646H17.9814V27H0.348633V0.695312H17.9453V5.08545H5.76855V11.3545H16.1748V15.6001Z"
                  :fill="lightThemeActive ? 'var(--dark-gray)' : 'var(--light-gray)'"
                />
                <path
                  d="M42.5518 27H37.1318L26.5811 9.69238V27H21.1611V0.695312H26.5811L37.1499 18.0391V0.695312H42.5518V27Z"
                  :fill="lightThemeActive ? 'var(--dark-gray)' : 'var(--light-gray)'"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              v-else
              :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
              class="Header__Link"
              active-class="none"
              exact
            >
              <svg
                width="41"
                height="28"
                viewBox="0 0 41 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1748 15.6001H5.76855V22.646H17.9814V27H0.348633V0.695312H17.9453V5.08545H5.76855V11.3545H16.1748V15.6001Z"
                  :fill="lightThemeActive ? 'var(--dark-gray)' : 'var(--light-gray)'"
                />
                <path
                  d="M34.8013 20.0986C34.8013 19.0749 34.4399 18.292 33.7173 17.75C32.9946 17.196 31.6938 16.6178 29.8149 16.0156C27.936 15.4014 26.4486 14.7992 25.3525 14.209C22.3656 12.5951 20.8721 10.4211 20.8721 7.68701C20.8721 6.26579 21.2695 5.00114 22.0645 3.89307C22.8714 2.77295 24.0216 1.89974 25.5151 1.27344C27.0207 0.647135 28.7069 0.333984 30.5737 0.333984C32.4526 0.333984 34.1268 0.677246 35.5962 1.36377C37.0656 2.03825 38.2038 2.99577 39.0107 4.23633C39.8298 5.47689 40.2393 6.88607 40.2393 8.46387H34.8193C34.8193 7.25944 34.4399 6.32601 33.6812 5.66357C32.9224 4.9891 31.8564 4.65186 30.4834 4.65186C29.1585 4.65186 28.1287 4.9349 27.394 5.50098C26.6593 6.05501 26.292 6.78971 26.292 7.70508C26.292 8.56022 26.7196 9.27686 27.5747 9.85498C28.4419 10.4331 29.7126 10.9751 31.3867 11.481C34.4701 12.4084 36.7163 13.5586 38.1255 14.9316C39.5347 16.3047 40.2393 18.015 40.2393 20.0625C40.2393 22.3389 39.3781 24.1274 37.6558 25.4282C35.9334 26.717 33.6149 27.3613 30.7002 27.3613C28.6768 27.3613 26.834 26.994 25.1719 26.2593C23.5098 25.5125 22.2391 24.4948 21.3599 23.2061C20.4927 21.9173 20.0591 20.4238 20.0591 18.7256H25.4971C25.4971 21.6283 27.2314 23.0796 30.7002 23.0796C31.9889 23.0796 32.9946 22.8206 33.7173 22.3027C34.4399 21.7728 34.8013 21.0381 34.8013 20.0986Z"
                  :fill="lightThemeActive ? 'var(--dark-gray)' : 'var(--light-gray)'"
                />
              </svg>
            </NuxtLink>
          </li>
          <li @click="changeTheme">
            <i class="material-icons">invert_colors</i>
          </li>
          <li>
            <div class="portfolio-font-manager">
              <i class="material-icons">text_fields</i>
              <i @click="increaseFont" class="material-icons">add</i>
              <i @click="decreaseFont" class="material-icons">remove</i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      names: ["Julliet V!", "Julls!", "Jénnifer!"]
    };
  },
  computed: {
    ...mapState({
      lightThemeActive: state => state.lightThemeActive
    }),
    isIndex() {
      if (this.$route.fullPath === "/") return true;
      if (this.$route.fullPath === "/en/") return true;

      return false;
    }
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme");
    },
    increaseFont() {
      this.$emit("increaseFont");
    },
    decreaseFont() {
      this.$emit("decreaseFont");
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  cursor: pointer;
}

.portfolio-fix-header {
  position: fixed;
  z-index: 999;
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.portfolio-accessibility-options {
  margin-top: 10px;
  display: flex;
  align-items: center;
  line-height: 1;

  li {
    margin-left: 35px;
  }

  i {
    font-size: 2.6875rem;
  }

  &--caller {
    display: none;
  }
}

.portfolio-font-manager {
  background: var(--light-gray);
  border-radius: 4px;
  overflow: hidden;
  width: 145px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > i {
    display: flex;
    align-items: center;
    width: 33.3%;
    font-size: 2.6875rem;
    background: #c4c4c4;
    color: var(--dark-gray);
    height: 100%;
    border-left: 1px solid var(--dark-gray);

    &:hover {
      background: #939393;
    }

    &:first-child {
      background: transparent;
      border-left: 0;
    }
  }
}

.portfolio-header {
  padding-top: 5px;
  position: relative;
  width: 672px;

  img {
    position: absolute;
    z-index: 50;
    top: 0;
    left: -60px;
  }

  h1,
  h2 {
    position: relative;
    z-index: 55;
  }

  h1 {
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 2.8125rem;
    color: var(--dark-gray);

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 3.375rem;
    color: var(--light-gray);
    margin-top: 1.875rem;
  }
}
.portfolio-options {
  &-wrapper {
  }

  &-links {
    width: 100%;
    height: 45px;
    margin-bottom: 25px;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;

    li {
      margin-left: 15px;
    }
  }
}

@media screen and (max-width: 768px) {
  .portfolio-fix-header {
    width: calc(100% - 30px);
  }

  .portfolio-header {
    img {
      display: none;
    }

    h1 {
      color: var(--light-gray);
    }

    h2 {
      display: none;
    }
  }

  .portfolio-accessibility-options {
    display: none;
  }
}
</style>

<style lang="scss">
.portfolio-header {
  .vue-typer .custom.char {
    color: var(--dark-gray);
  }

  .vue-typer .custom.caret {
    background-color: var(--dark-gray);
    width: 20px;
  }
}

@media screen and (max-width: 768px) {
  .portfolio-header {
    .vue-typer .custom.char {
      color: var(--light-gray);
    }
  }
}
</style>