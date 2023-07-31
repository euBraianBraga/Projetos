import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import store from "./store/store";

const app = createApp(App);

// Criamos primeiro uma constante com nosso "aplicativo" e dentro dele passamos
// como vai funcionar nossas rotas e a store para guardarmos os dados
app.use(router);
app.use(store);
// Aqui pegamos o id da div que esta no index.html para referenciar como se fosse um appendchild
app.mount("#app");
