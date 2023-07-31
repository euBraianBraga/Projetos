<template>
  <div id="app">
    <NavBar />
    <h1 class="introducao">
      <i>
        Conhecendo o segundo framework de javascript mais famoso atualmente!!!
      </i>
    </h1>
    <SectionVue />
    <SectionPrimeirosPassos />
    <SectionProdutos />
    <SectionPreco />
    <div style="text-align: center; margin-top: 25px">
      <h1>Depoimentos de Alunos</h1>
    </div>
    <SectionQualidade />
    <Footer mensagem="Se tiver qualquer sugestão" />
  </div>
</template>

<script>
import NavBar from "../components/react/NavBarReact.vue";
import Footer from "../components/Footer";
import SectionVue from "../components/react/SectionReact";
import SectionPreco from "../components/react/SectionPrecoReact";
import SectionProdutos from "../components/react/SectionProdutosReact";
import SectionQualidade from "../components/react/SectionQualidadeReact";
import SectionPrimeirosPassos from "../components/react/SectionPrimeirosPassosReact";
import { mapGetters, mapMutations } from "vuex";
import { GET_USER_TOKEN_GETTER } from "../store/storeconstants";
export default {
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
    }),
  },
  components: {
    NavBar,
    Footer,
    SectionVue,
    SectionPreco,
    SectionProdutos,
    SectionQualidade,
    SectionPrimeirosPassos,
  },
  methods: {
    ...mapMutations({}),
  },
};
</script>

<style scoped>
.introducao {
  font-size: 3em;
  line-height: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 10px;
}
</style>