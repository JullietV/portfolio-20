<template>
  <div class="portfolio-blog">
    <div class="portfolio-container" v-if="posts">
      <Post v-for="post in posts" :attr="post.attributes" :key="post.attributes.subject">
        {{post.attributes.extract}}
        <nuxt-link class="portfolio-blog-read-more-btn" :to="getPermalink(post)">
          Ver más
          <i class="material-icons">add</i>
        </nuxt-link>
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
  head() {
    return { title: "Blog · Julliet V." };
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
      return `/${this.prefix}/${
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
  box-sizing: border-box;
  min-height: 100vh;

  &-read-more-btn {
    margin: 10px 0;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: var(--purple);
    text-decoration: none;

    i.material-icons {
      width: 56px;
      height: 56px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      border-radius: 50%;
      background-color: var(--purple);
      color: #fff;
    }
  }
}

@media screen and (max-width: 768px) {
  .portfolio-blog {
    padding-top: var(--padding-top-mobile);
  }
}
</style>