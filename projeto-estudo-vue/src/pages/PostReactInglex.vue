<template>
  <div id="app">
    <NavBar />
    <h1 class="introducao">
      <i>
        Getting to know the second most famous javascript framework today!!!
      </i>
    </h1>
    <SectionVue />
    <SectionPrimeirosPassos />
    <SectionProdutos />
    <SectionPreco />
    <div style="text-align: center; margin-top: 25px">
      <h1>Student Testimonials</h1>
    </div>
    <SectionQualidade />
    <Footer mensagem="If you have any suggestion" />
  </div>
</template>

<script>
import Footer from "../components/FooterReactIngles";
import { mapGetters, mapMutations } from "vuex";
import NavBar from "../components/NavBarReactIngles.vue";
import SectionVue from "../components/SectionReactIngles";
import { GET_USER_TOKEN_GETTER } from "../store/storeconstants";
import SectionPreco from "../components/react/SectionPrecoReactIngles";
import SectionQualidade from "../components/react/SectionQualidadeReactIngles";
import SectionProdutos from "../components/react/SectionProdutosReactIngles";
import SectionPrimeirosPassos from "../components/react/SectionPrimeirosPassosReactIngles";
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