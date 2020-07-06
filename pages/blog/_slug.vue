<template>
  <div v-if="singlePostComponent" class="portfolio-single portfolio-container">
    <Post :attr="attributes">
      <component :is="singlePostComponent" />
    </Post>
  </div>
</template>
<script>
import Post from "@/components/Post";
export default {
  name: "Single",
  components: { Post },
  async asyncData({ params }) {
    try {
      console.info(params.slug);
      let post = await import(`~/content/${params.slug}.md`);
      return {
        attributes: post.attributes,
        singlePostComponent: post.vue.component
      };
    } catch (err) {
      console.debug(err);
      return false;
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