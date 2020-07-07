import Mode from 'frontmatter-markdown-loader/mode'

const path = require("path");
var glob = require('glob');

async function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
    })
  );
}


export default async () => {
  return {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Raleway:wght@400;500;700&display=swap" }
      ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
      '@nuxtjs/moment',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
      // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
      'nuxt-material-design-icons',
      '@nuxtjs/bulma'
    ],
    router: {
      middleware: 'i18n'
    },
    plugins: [
      '~/plugins/i18n.js',
      { src: '~/plugins/vue-typer.js', ssr: false }
    ],
    generate: {
      routes: await getDynamicPaths({
        '/posts': 'posts/*.md'
      })
    },
    /*
    ** Build configuration
    */
    build: {
      postcss: {
        preset: {
          features: {
            customProperties: false
          }
        }
      },
      /*
      ** You can extend webpack config here
      */
      extend(config, ctx) {
        config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, "content"),
          loader: "frontmatter-markdown-loader",
          options: {
            mode: [Mode.VUE_COMPONENT, Mode.META]
          }
        });
      }
    }
  }
}
