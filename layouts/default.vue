<template>
  <div :class="{'light': lightThemeActive}">
    <navbar @increaseFont="increaseFont" @decreaseFont="decreaseFont" @changeTheme="handleTheme" />
    <nuxt />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Navbar from "@/components/Navbar";

export default {
  name: "DefaultLayout",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      lightThemeActive: state => state.lightThemeActive
    })
  },
  methods: {
    handleTheme() {
      this.$store.commit("SET_LIGHT_THEME", !this.lightThemeActive);
    },
    increaseFont() {
      const html = document.getElementsByTagName("html")[0];
      const style = window
        .getComputedStyle(html, null)
        .getPropertyValue("font-size");
      let fontSize = parseFloat(style);
      html.style.fontSize = fontSize + 1 + "px";
    },
    decreaseFont() {
      const html = document.getElementsByTagName("html")[0];
      const style = window
        .getComputedStyle(html, null)
        .getPropertyValue("font-size");
      let fontSize = parseFloat(style);
      html.style.fontSize = fontSize - 1 + "px";
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Raleway:wght@400;500;700&display=swap");

:root {
  --purple: #6947ff;
  --light-green: #b4ef63;
  --dark-green: #1fde00;
  --light-gray: #d8d8d8;
  --dark-gray: #555;
  --turquoise: #00eae6;
  --dark-turquoise: #00ceff;
  --padding-top-desktop: 190px;
  --padding-top-mobile: 70px;
}

html {
  font-size: 16px;
}

body {
  font-family: "Raleway", sans-serif;
  background: var(--dark-gray);
  color: var(--light-gray);
  min-height: 100vh;

  a,
  a:hover {
    color: var(--light-green);
    text-decoration: underline;
    font-weight: 700;
  }

  .light {
    background: var(--light-gray);
    color: var(--dark-gray);

    a,
    a:hover {
      color: var(--dark-green);
    }
  }
}

.vue-typer .custom.char {
  color: var(--turquoise);
  vertical-align: bottom;

  &.selected {
    background: var(--purple);
  }
}

.vue-typer .custom.caret {
  height: 5px;
  width: 40px;
  vertical-align: bottom;
  background-color: var(--light-green);
}

.light {
  .vue-typer .custom.char {
    color: var(--purple);
    vertical-align: bottom;

    &.selected {
      background: var(--turquoise);
    }
  }

  .vue-typer .custom.caret {
    height: 5px;
    width: 40px;
    vertical-align: bottom;
    background-color: var(--dark-green);
  }
}

.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
}

.portfolio-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 15px 15px;
  grid-template-areas: ". . . . . . . . . . .";
}

@media screen and (max-width: 768px) {
  
}

@media screen and (max-width: 1200px) {
  body {
    padding: 0 15px
  }
}
</style>