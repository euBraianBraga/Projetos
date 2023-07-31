<template>
  <div>
    <img
      class="img-fundo"
      alt="Imagem de fundo"
      src="../assets/wave-azul.svg"
    />
    <div class="container">
      <div class="login-content">
        <form action="index.html" @submit.prevent="onSignup()">
          <img src="../assets/avatar-azul.svg" alt="Avatar" />
          <h2 class="title">Cadastro</h2>
          <div class="alert alert-danger" v-if="error">
            {{ error }}
          </div>
          <div class="alert alert-success" v-if="alert">
            {{ "Cadastro Realizado com Sucesso!" }}
            <br />
            {{ "NavBar foi liberada para que consiga acessar os blogs!" }}
          </div>
          <a href="#" class="title"
            >Digite Email e Senha para fazer o cadastro</a
          >
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
              <h5></h5>
              <input type="text" class="input" v-model.trim="email" />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5></h5>
              <input type="password" class="input" v-model.trim="password" />
            </div>
          </div>
          <a href="#">Precisa de ajuda com o cadastro ?</a>
          <input type="submit" class="btn" value="Cadastro" />
          <div class="error" v-if="errors.email">
            <i> {{ errors.email }} </i>
          </div>
          <div class="error" v-if="errors.password">
            <i> {{ errors.password }}</i>
          </div>
        </form>
      </div>
      <div class="img-perso">
        <img
          src="../assets/fundo-celular-azul.svg"
          alt="Imagem de fundo do login"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SignupValidations from "../services/SignupValidations";
import { mapActions, mapMutations } from "vuex";
import {
  LOADING_SPINNER_SHOW_MUTATION,
  SIGNUP_ACTION,
} from "../store/storeconstants";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
      alert: false,
    };
  },
  beforeRouteEnter(_, _1, next) {
    next((vm) => {
      console.log(vm.$store.state.auth);
    });
  },
  methods: {
    ...mapActions("auth", {
      signup: SIGNUP_ACTION,
    }),

    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    async onSignup() {
      let validations = new SignupValidations(this.email, this.password);

      this.errors = validations.checkValidations();
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
      this.showLoading(true);
      try {
        await this.signup({
          email: this.email,
          password: this.password,
        });
        this.alert = true;
      } catch (error) {
        this.error = error;
        this.showLoading(false);
        this.alert = false;
      }
      this.showLoading(false);
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
  font-family: "Poppins", sans-serif;
}

.img-fundo {
  right: 0;
  bottom: 0;
  z-index: -1;
  height: 100%;
  position: fixed;
  transform: scaleX(-1);
}

.container {
  width: 100vw;
  display: grid;
  grid-gap: 7rem;
  padding: 0.2rem;
  height: calc(100vh - 100px);
  grid-template-columns: repeat(2, 1fr);
}

.img-perso {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.login-content {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.img-perso img {
  width: 500px;
}

form {
  width: 360px;
}

.login-content img {
  height: 100px;
}

.login-content h2 {
  color: #333;
  margin: 15px 0;
  font-size: 2.9em;
}

.login-content .input-div {
  display: grid;
  margin: 25px 0;
  padding: 5px 0;
  position: relative;
  grid-template-columns: 7% 93%;
  border-bottom: 2px solid #d9d9d9;
}

.i {
  color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.i i {
  transition: 0.3s;
}

.input-div > div {
  position: relative;
  height: 45px;
}

.input-div > div > h5 {
  top: 50%;
  left: 10px;
  color: #999;
  font-size: 18px;
  transition: 0.3s;
  position: absolute;
  transform: translateY(-50%);
}

.input-div:before,
.input-div:after {
  width: 0%;
  content: "";
  height: 2px;
  bottom: -2px;
  transition: 0.4s;
  position: absolute;
  background-color: #00b0ff;
}

.input-div:before {
  right: 50%;
}

.input-div:after {
  left: 50%;
}

.input-div.focus:before,
.input-div.focus:after {
  width: 50%;
}

.input-div.focus > div > h5 {
  top: -5px;
  font-size: 15px;
}

.input-div.focus > .i > i {
  color: #00b0ff;
}

.input-div > div > input {
  top: 0;
  left: 0;
  color: #555;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  position: absolute;
  font-size: 1.2rem;
  padding: 0.5rem 0.7rem;
  font-family: "poppins", sans-serif;
}

.input-div.pass {
  margin-bottom: 4px;
}

a {
  color: #999;
  display: block;
  transition: 0.3s;
  font-size: 0.9rem;
  text-align: right;
  text-decoration: none;
}

a:hover {
  color: #00b0ff;
}

.btn {
  width: 100%;
  border: none;
  height: 50px;
  color: #fff;
  outline: none;
  display: block;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
  font-size: 1.2rem;
  border-radius: 25px;
  background-size: 200%;
  text-transform: uppercase;
  font-family: "Poopins", sans-serif;
  background-image: linear-gradient(to right, #e5f6fe, #00b0ff, #009fe6);
}

.btn:hover {
  background-position: right;
}

@media screen and (max-width: 1050px) {
  .container {
    grid-gap: 5rem;
  }
}

@media screen and (max-width: 1000px) {
  form {
    width: 290px;
  }

  .login-content h2 {
    margin: 8px 0;
    font-size: 2.4rem;
  }

  .img-perso img {
    width: 400px;
  }
}

.error {
  color: red;
  font-size: 1.5em;
}

@media screen and (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
  }

  .img-perso {
    display: none;
  }

  .img-fundo {
    display: none;
  }

  .login-content {
    justify-content: center;
  }
}
</style>