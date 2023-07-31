import store from "./store/store";
import { createRouter, createWebHistory } from "vue-router";
import { IS_USER_AUTHENTICATE_GETTER } from "./store/storeconstants";

// Rotas criadas com uma const e importando com uma arrow
// function passando a pagina para referenciar
const Home = () => import("./pages/Home.vue");
const Post = () => import("./pages/Post.vue");
const Login = () => import("./pages/Login.vue");
const Signup = () => import("./pages/Signup.vue");
const QuizVue = () => import("./pages/QuizVue.vue");
const QuizReact = () => import("./pages/QuizReact.vue");
const PostReact = () => import("./pages/PostReact.vue");
const PostsIngles = () => import("./pages/PostsIngles.vue");
const PostReactInglex = () => import("./pages/PostReactInglex.vue");

// Chamando o routes dentro de uma constante dentro de um colchete
// mais auth para saber se tem acesso de primeira ou não
const routes = [
  { path: "", component: Home },
  { path: "/posts", component: Post, meta: { auth: true } },
  { path: "/login", component: Login, meta: { auth: false } },
  { path: "/signup", component: Signup, meta: { auth: false } },
  { path: "/quizVue", component: QuizVue, meta: { auth: true } },
  { path: "/quizReact", component: QuizReact, meta: { auth: true } },
  { path: "/postsReact", component: PostReact, meta: { auth: true } },
  {
    path: "/postsReactIngles",
    component: PostReactInglex,
    meta: { auth: true },
  },
  { path: "/postsIngles", component: PostsIngles, meta: { auth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Validação dentro do beforeEach para seguir para o login ou posts
router.beforeEach((to, from, next) => {
  if (
    "auth" in to.meta &&
    to.meta.auth &&
    !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next("/login");
  } else if (
    "auth" in to.meta &&
    !to.meta.auth &&
    store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next("/posts");
  } else {
    next();
  }
});

export default router;
