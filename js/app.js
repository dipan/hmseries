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
        path: "assets/img/portfolio/thumbnails/SeoKiAmarMotoiKade.jpeg",
        category: "Recitation",
        project: "Seo Ki Amar Motoi Kade",
      },
      {
        path: "assets/img/portfolio/thumbnails/VejaGhasBaroMas.jpg",
        category: "Bengali Video Song",
        project: "Veja Ghas Baro Mas",
      },
      {
        path: "assets/img/portfolio/thumbnails/NilGhuri.jpeg",
        category: "Bengali Video Song",
        project: "Nil Ghuri",
      },
      {
        path: "assets/img/portfolio/thumbnails/SukherGhor.jpg",
        category: "Bengali Video Song",
        project: "Sukher Ghor",
      },
      {
        path: "assets/img/portfolio/thumbnails/ZindegiHumeBulaLe.jpeg",
        category: "Hindi Video Song",
        project: "Zindegi Hume Bula Le",
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
