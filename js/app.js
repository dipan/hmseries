// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  el: "#app",
  data: {
    message: "Hello Vue!",
    portfolioPath: "assets/img/portfolio/thumbnails",
    portfolio: [
      {
        category: "Bengali Video Song",
        project: "Veja Veja Chokh",
        youtubeLink: "https://www.youtube.com/embed/De1wdjE15oo",
      },
      {
        category: "Bengali Video Song",
        project: "Veja Ghas Baro Mas",
        youtubeLink: "https://www.youtube.com/embed/Y9Yyc5Vwwso",
      },
      {
        category: "Bengali Video Song",
        project: "Bosonta Ese Geche",
        youtubeLink: "https://www.youtube.com/embed/TokNdNozgA4",
      },
      {
        category: "Bengali Video Song",
        project: "Pather Dhulo",
        youtubeLink: "https://www.youtube.com/embed/D9Oz5Eq7hbM",
      },
      {
        category: "Bengali Video Song",
        project: "Jodi Toke Ake Mon",
        youtubeLink: "https://www.youtube.com/embed/sNonwQzsGzY",
      },
      {
        category: "Bengali Video Song",
        project: "Tui Ki Amar Hobi Bol",
        youtubeLink: "https://www.youtube.com/embed/n56p-kRV6no",
      },
      {
        category: "Recitation",
        project: "Seo Ki Amar Motoi Kade",
        youtubeLink: "https://www.youtube.com/embed/9Dy8sZSeviM",
      },
      {
        category: "Bengali Video Song",
        project: "Veja Ghas Baro Mas",
        youtubeLink: "https://www.youtube.com/embed/_TvtyOS9eY0",
      },
      {
        category: "Bengali Video Song",
        project: "Nil Ghuri",
        youtubeLink: "https://www.youtube.com/embed/Xc9v2k_cBVI",
      },
      {
        category: "Bengali Video Song",
        project: "Sukher Ghor",
        youtubeLink: "https://www.youtube.com/embed/x-yAffl6HyM",
      },
      {
        category: "Hindi Video Song",
        project: "Zindegi Hume Bula Le",
        youtubeLink: "https://www.youtube.com/embed/EGLqWSCjH8o",
      },
    ],
  },
  methods: {
    listFiles(dirPath) {
      // const path = require("path");
      // const fs = require("fs");
      // fs.readdir(
      //   path.join(__dirname, "../assets/img/portfolio/thumbnails"),
      //   (err, items) => {
      //     if (err) {
      //       console.log(err);
      //     }
      //     console.log(items);
      //   }
      // );
    },
  },
  mounted() {
    // this.listFiles("");
  },
});

// Now the app has started!
