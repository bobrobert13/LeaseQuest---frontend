const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/login",
    children: [{ path: "", component: () => import("pages/login.vue") }],
  },
  {
    path: "/carrusel",
    children: [{ path: "", component: () => import("pages/carrusel.vue") }],
  },
  {
    path: "/registro",
    children: [{ path: "", component: () => import("pages/registro.vue") }],
  },
  {
    path: "/home",
    children: [{ path: "", component: () => import("pages/home.vue") }],
  },
  {
    path: "/apartament",
    children: [{ path: "", component: () => import("pages/apartament.vue") }],
  },
  {
    path: "/profile",
    children: [{ path: "", component: () => import("pages/profile.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
