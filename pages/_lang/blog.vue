<template>
  <div class="portfolio-blog">
    <div class="portfolio-container" v-if="posts">
      <Post
        v-for="post in posts"
        :key="post.attributes.subject"
        :title="post.attributes.subject"
      >
        <nuxt-link :to="getPermalink(post)">Ver más</nuxt-link>
      </Post>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
export default {
  name: "Blog",
  components: {
    Post
  },
  async asyncData() {
    const resolve = require.context("~/content/", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      return resolve(key);
    });
    return {
      posts: imports
    };
  },
  data() {
    return {
      prefix: "blog"
    };
  },
  methods: {
    getPermalink(post) {
      return `${this.prefix}/${
        post.meta.resourcePath
          .split("\\")
          .pop()
          .split("/")
          .pop()
          .split(".")[0]
      }`;
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-blog {
  padding-top: var(--padding-top-desktop);
}

@media screen and (max-width: 768px) {
    .portfolio-blog {
        padding-top: var(--padding-top-mobile);
    }
}
</style>