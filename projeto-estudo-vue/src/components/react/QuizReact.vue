<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="header-quiz">
        <h1>React Quiz App</h1>
      </div>
      <div class="Progresso-por-passo" :style="{ width: progress + '%' }"></div>
      <div
        class="box"
        :key="index"
        v-show="quiz"
        v-for="(question, index) in questions.slice(a, b)"
      >
        <div class="box-question">
          <h2>Pergunta {{ b }}/{{ questions.length }}</h2>
          <p>{{ question.question }}</p>
        </div>
        <div class="box-propositions">
          <ul>
            <li
              class="li"
              :key="index"
              @click="selectResponse(proposition, index)"
              :class="correct ? check(proposition) : ''"
              v-for="(proposition, index) in question.propositions"
            >
              {{ proposition.props }}
              <div
                class="fas fa-check"
                v-if="correct ? proposition.correct : ''"
              ></div>
              <div
                class="fas fa-times"
                v-if="correct ? !proposition.correct : ''"
              ></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="box-score" v-if="score_show">
        <h2>O resultado do teste é</h2>
        <h2>{{ score }}/{{ questions.length }}</h2>
        <div class="btn-restart">
          <button @click="restartQuiz">
            Restart <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
      <div class="footer-quiz">
        <div v-if="progress < 100" class="box-button">
          <button
            @click="skipQuestion()"
            :style="next ? 'background-color: rgb(106, 128, 202)' : ''"
          >
            Skip
          </button>
          <button
            @click="nextQuestion()"
            :style="!next ? 'background-color: rgb(106, 128, 202)' : ''"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "O que e o React.js ?",
          propositions: [
            { props: "Frameworks JavaScript Sem código aberto" },
            { props: "Biblioteca" },
            { props: "Interface" },
            { props: "Biblioteca JavaScript de código aberto", correct: true },
          ],
        },
        {
          question:
            "Qual é o comando correto para criar um novo projeto React ?",
          propositions: [
            { props: "npx create-react-app myReactApp", correct: true },
            { props: "nx create-react-app" },
            { props: "npm create=react-app myReactApp" },
            { props: 'npm create-react-app"' },
          ],
        },
        {
          question:
            "Qual comando é usado para iniciar o servidor de desenvolvimento local do React ?",
          propositions: [
            { props: "npm run dev" },
            { props: "npm serve" },
            { props: "npm start", correct: true },
            { props: "np build" },
          ],
        },
        {
          question:
            "Qual é a porta localhost padrão que um servidor de desenvolvimento React usa?",
          propositions: [
            { props: "3500" },
            { props: "5000" },
            { props: "3000", correct: true },
            { props: "8080" },
          ],
        },
        {
          question:
            "Uma cópia do DOM 'real' que é mantida na memória é chamada de quê?",
          propositions: [
            { props: "DOM" },
            { props: "Virtual DOM", correct: true },
            { props: "Shadow DOM" },
            { props: "React DOM" },
          ],
        },
        {
          question: "Qual ferramenta o React usa para compilar JSX ?",
          propositions: [
            { props: "JSX Compiler" },
            { props: "React Router" },
            { props: "ReactDOM" },
            { props: "Babel", correct: true },
          ],
        },
      ],
      a: 0,
      b: 1,
      next: true,
      score_show: false,
      quiz: true,
      score: 0,
      correct: false,
      progress: 0,
    };
  },
  name: "App",
  computed: {},
  methods: {
    selectResponse(e) {
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
      }
    },
    skipQuestion() {
      if (!this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;

      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },

    restartQuiz() {
      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>
<style scoped>
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  letter-spacing: 2px;
}

.container-app {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.container-quiz {
  display: flex;
  width: 40%;
  height: 85%;
  background-color: white;
  text-align: center;
  flex-flow: column;
  border: 1px solid #e7eae0;
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-quiz {
  display: flex;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #63b1bc;
  justify-content: center;
  align-items: center;
  background-color: #63b1bc;
  border-radius: 10px 10px 0px 0px;
}

.header-quiz h1 {
    color: #fff
}

.container-quiz .box {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}

.box-question {
  margin-top: 20px;
}

.box-question p {
  margin-top: 20px;
}

.box-propositions {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
}

ul {
  display: flex;
  width: 80%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

li {
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}

li:hover {
  /*transform: scale(1.1);*/
  background-color: #e7eae0;
}

li > div {
  float: right;
  margin-top: 7px;
  margin-right: 7px;
  color: white;
}

.check {
  color: rgb(74, 219, 74);
}

.close {
  color: rgb(240, 117, 100);
}

.footer-quiz {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  background-color: #63b1bc;
  border-top: 1px solid #63b1bc;
  border-radius: 0px 0px 10px 10px;
}

.box-button {
  display: flex;
  width: 100%;
}

.footer-quiz .box-button button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 20px;
  letter-spacing: 2px;
  background-color: #a09f9ff5;
}

li.correct {
  border: 1px solid rgb(74, 219, 74);
  background-color: rgb(74, 219, 74);
  color: white;
  font-weight: 600;
}

li.incorrect {
  border: 1px solid rgb(240, 117, 100);
  background-color: rgb(240, 117, 100);
  color: white;
  font-weight: 600;
}

.box-score {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
}

.box-score h2 {
  margin-top: 40px;
}

i {
  display: none;
  color: white;
}

.Progresso-por-passo {
  display: flex;
  width: 100%;
  height: 5px;
  background-color: rgb(106, 128, 202);
  transition: 0.5s;
}

.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 50px;
}

.btn-restart button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  background-color: rgb(106, 128, 202);
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.next {
  background-color: rgb(106, 128, 202);
}

@media screen and (max-width: 900px) {
  .container-quiz {
    width: 60%;
  }
}

@media screen and (max-width: 720px) {
  .container-quiz {
    width: 80%;
  }
  .footer-quiz .box-button button {
    width: 100px;
  }
}
</style>


