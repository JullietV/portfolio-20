<template>
  <div class="portfolio-single portfolio-container">
    <Post v-if="attributes" :attr="attributes">
      <component :is="singlePostComponent" />
    </Post>
  </div>
</template>
<script>
import Post from "@/components/Post";
export default {
  name: "Single",
  components: { Post },
  data() {
    return {
      attributes: null,
      singlePostComponent: null
    };
  },
  head() {
    return { title: 'Julliet V.' };
  },
  created() {
    this.importPost();
  },
  methods: {
    async importPost() {
      try {
        const post = await import(`~/content/${this.$route.params.slug}.md`);
        this.attributes = post.attributes,
        this.singlePostComponent = post.vue.component

      } catch (err) {
        console.debug(err);
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.portfolio-single {
  padding-top: var(--padding-top-desktop);
}

@media screen and (max-width: 768px) {
  .portfolio-single {
    padding-top: var(--padding-top-mobile);
  }
}
</style>