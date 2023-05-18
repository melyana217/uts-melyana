import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/Surah",
      name: "Surah",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Surah.vue"),
    },
    {
      path: "/Cari",
      name: "Cari",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CariView.vue"),
    },    
    {
      path: "/Abasa",
      name: "Abasa",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AbasaView.vue"),
    },
    {
      path: "/Annaba",
      name: "Annaba",
      component: () => import( "../views/AnnabaView.vue")
    },
    {
      path: "/Annaziat",
      name: "Annaziat",
      component: () => import( "../views/AnnaziatView.vue")
    },
    {
      path: "/Attakwir",
      name: "Attakwir",
      component: () => import( "../views/AttakwirView.vue")
    },
    {
      path: "/Alinfitar",
      name: "Alinfitar",
      component: () => import( "../views/AlinfitarView.vue")
    },
    {
      path: "/Almuthaffifiin",
      name: "Almuthaffifiin",
      component: () => import( "../views/AlmuthaffifiinView.vue")
    },
    {
      path: "/Alinsyiqaq",
      name: "Alinsyiqaq",
      component: () => import( "../views/AlinsyiqaqView.vue")
    },
    {
      path: "/Alburuj",
      name: "Alburuj",
      component: () => import( "../views/AlburujView.vue")
    },
    {
      path: "/Attariq",
      name: "Attariq",
      component: () => import( "../views/AttariqView.vue")
    },
    {
      path: "/Alala",
      name: "Alala",
      component: () => import( "../views/AlalaView.vue")
    },

    {
      path: "/Alghasyiyah",
      name: "Alghasyiyah",
      component: () => import( "../views/AlghasyiyahView.vue")
    },
    {
      path: "/Alfajr",
      name: "Alfajr",
      component: () => import( "../views/AlfajrView.vue")
    },
    {
      path: "/Albalad",
      name: "Albalad",
      component: () => import( "../views/AlbaladView.vue")
    },
    {
      path: "/Asysyams",
      name: "Asysyams",
      component: () => import( "../views/AsysyamsView.vue")
    },
    {
      path: "/Allail",
      name: "Allail",
      component: () => import( "../views/AllailView.vue")
    },

    {
      path: "/Adduha",
      name: "Adduha",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AdduhaView.vue"),
    },
    {
      path: "/Alinsyirah",
      name: "Alinsyirah",
      component: () => import( "../views/AlinsyirahView.vue")
    },
    {
      path: "/Attin",
      name: "Attin",
      component: () => import( "../views/AttinView.vue")
    },
    {
      path: "/Alalaq",
      name: "Alalaq",
      component: () => import( "../views/AlalaqView.vue")
    },
    {
      path: "/Alqadr",
      name: "Alqadr",
      component: () => import( "../views/AlqadrView.vue")
    },
    {
      path: "/Albayyinah",
      name: "Albayyinah",
      component: () => import( "../views/AlbayyinahView.vue")
    },
    {
      path: "/Alzalzalah",
      name: "Alzalzalah",
      component: () => import( "../views/AlzalzalahView.vue")
    },
    {
      path: "/Aladiyat",
      name: "Aladiyat",
      component: () => import( "../views/AladiyatView.vue")
    },
    {
      path: "/Attariq",
      name: "Attariq",
      component: () => import( "../views/AttariqView.vue")
    },
    {
      path: "/Alqariah",
      name: "Alqariah",
      component: () => import( "../views/AlqariahView.vue")
    },

    {
      path: "/Attakasur",
      name: "Attakasur",
      component: () => import( "../views/AttakasurView.vue")
    },
    {
      path: "/Alfajr",
      name: "Alfajr",
      component: () => import( "../views/AlfajrView.vue")
    },
    {
      path: "/Alasr",
      name: "Alasr",
      component: () => import( "../views/AlAsrView.vue")
    },
    {
      path: "/Alhumazah",
      name: "Alhumazah",
      component: () => import( "../views/AlhumazahView.vue")
    },
    {
      path: "/Alfil",
      name: "Alfil",
      component: () => import( "../views/AlfilView.vue")
    },

    {
      path: "/Quraisy",
      name: "Quraisy",
      component: () => import( "../views/QuraisyView.vue")
    },
    {
      path: "/Almaun",
      name: "Almaun",
      component: () => import( "../views/AlmaunView.vue")
    },

    {
      path: "/Alkausar",
      name: "Alkausar",
      component: () => import( "../views/AlkausarView.vue")
    },
    {
      path: "/Alkafirun",
      name: "Alkafirun",
      component: () => import( "../views/AlkafirunView.vue")
    },
    {
      path: "/Annasr",
      name: "Annasr",
      component: () => import( "../views/AnnasrView.vue")
    },

    {
      path: "/Allahab",
      name: "Allahab",
      component: () => import( "../views/AllahabView.vue")
    },
    {
      path: "/Alikhlas",
      name: "Alikhlas",
      component: () => import( "../views/AlikhlasView.vue")
    },
    {
      path: "/Alfalaq",
      name: "Alfalaq",
      component: () => import( "../views/AlfalaqView.vue")
    },
    {
      path: "/Annas",
      name: "Annas",
      component: () => import( "../views/AnnasView.vue")
    },

  ],
});

export default router;
