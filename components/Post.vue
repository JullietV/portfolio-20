<template>
  <article class="portfolio-post">
    <div class="portfolio-post-container">
      <h3 class="portfolio-post-title">{{attr.subject}}</h3>
      <ul class="portfolio-post-tags">
        <li v-for="tag in attr.tags" :key="tag">{{tag}}</li>
      </ul>
      <p class="portfolio-post-date">{{$moment(attr.date).format('DD [de] MMMM YYYY')}}</p>
    </div>
    <div class="portfolio-post-thumb">
      <img :src="attr.thumb" :alt="attr.subject" />
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
    attr: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-post {
  padding-bottom: 30px;
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

  &-tags {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: inline-flex;

    li {
      margin-right: 5px;

      &:after {
        content: '·';
        margin: 0 3px;
      }

      &:last-child {
        margin-right: 0;

        &:after {
          content: ''
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .portfolio-post-thumb {
    height: 100px;
  }
}
</style>

<style lang="scss">
.portfolio-post {
  .frontmatter-markdown {
    h1 {
      font-size: 2.15rem;
      line-height: 1.5;
      font-weight: bold;
    }
    h2 {
      font-size: 2rem;
      line-height: 1.5;
      font-weight: bold;
    }
    h3 {
      font-size: 1.8rem;
      line-height: 1.5;
      font-weight: bold;
    }
    h4 {
      font-size: 1.6rem;
      line-height: 1.5;
      font-weight: medium;
    }
    h5 {
      font-size: 1.4rem;
      line-height: 1.5;
    }
    h6 {
      font-size: 1.2rem;
      line-height: 1.5;
    }
    p {
      margin-bottom: 15px;
    }

    strong {
      color: inherit;
    }

    table {
      margin: 15px auto;

      thead {
        background: var(--turquoise);
        color: var(--dark-gray)
      }

      td {
        padding: 7px 15px;
        border-right: 1px solid var(--turquoise);

        &:last-child {
          border-right: none;
        }
      }

      tbody {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }

    ul {
      margin-left: 30px;
      list-style: initial;
    }
  }
}
</style>