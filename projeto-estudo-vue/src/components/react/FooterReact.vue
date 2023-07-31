<template>
  <div>
    <footer>
      <div class="main-content">
        <div class="left box">
          <h2 class="h2">Sobre nós</h2>
          <div class="content">
            <p>
              Blog de primeira viagem sobre tecnologia ajudando jovens a
              entrarem no mercado de tecnologia com pequeno passos, o foco
              principal e falar da maior biblioteca atualmente para criar
              interfaces de usuário.
            </p>
            <!-- <p>{{ mensagem }}</p> -->

            <div class="social">
              <a href="#"><span class="fab fa-facebook-f"></span></a>
              <a href="#"><span class="fab fa-twitter"></span></a>
              <a href="#"><span class="fab fa-instagram"></span></a>
              <a href="#"><span class="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>
        <div class="center box">
          <h2>Endereço</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker"></span>
              <span class="text">Av.Paulista, SPTECH</span>
            </div>

            <div class="phone">
              <span class="fas fas fa-phone-alt"></span>
              <span class="text">+55 61 9999-9999</span>
            </div>

            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">exemplo@exemplo.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="center">
          <span class="credit">Criado por <code>Reage React</code> </span>
          <span class="far fa-copyright">
            2021 Todos os diteitos reservados</span
          >
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    mensagem: {
      type: String,
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #d9d9d9;
  font-family: "Poppins", sans-serif;
}

footer {
  bottom: 0px;
  width: 100%;
  background: #111;
}
.main-content {
  display: flex;
}
.main-content .box {
  padding: 05px 50px;
  text-align: end;
}

.h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: start;
}
.box .content {
  margin: 20px 0 0 0;
  position: relative;
}
.box .content:after {
  content: "";
  width: 15%;
  height: 2px;
  background: #f12020;
  top: -10px;
}
.box .content:before {
  content: "";
  height: 2px;
  width: 100%;
  background: #1a1a1a;
  top: -10px;
}
.left .content .social {
  margin: 20px 0 0 0;
}
.left .content .social a {
  padding: 0 2px;
}
.left .content .social a span {
  width: 40px;
  height: 40px;
  background: #1a1a1a;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  font-size: 18px;
  transition: 0.3s;
}
.left .content .social a span:hover {
  background: #f12020;
}
.left .content p {
  text-align: justify;
}
.center .content .fas {
  font-size: 23px;
  background: #1a1a1a;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}
.center .content .fas:hover {
  background: #f12020;
}
.center .content .text {
  font-size: 17px;
  font-weight: 500;
  padding-left: 10px;
}
.center .content .phone {
  margin: 10px 0;
}
.center .content .msg {
  margin-top: 10px;
}
.right form input,
.right form textarea {
  width: 100%;
  font-size: 17px;
  background: #151515;
  padding-left: 10px;
  border: 1px solid #222222;
}
.right form input {
  height: 35px;
}
.right form input:focus,
.right form textarea:focus {
  outline-color: #3498db;
}
.right form .text {
  font-size: 17px;
  margin-bottom: 2px;
  color: #656565;
}
.right form .btn {
  margin-top: 10px;
}
.right form .btn button {
  height: 40px;
  width: 100%;
  background: #f12020;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}
.right form .btn button:hover {
  background: #000;
}
.bottom .center {
  padding: 5px;
  font-size: 15px;
  background: #151515;
  text-align: center;
}
.bottom .center span {
  color: #656565;
}
.bottom .center a {
  color: #f12020;
  text-decoration: none;
}
.bottom .center a:hover {
  text-decoration: underline;
}
@media screen and (max-width: 900px) {
  footer {
    position: fixed;
    bottom: 0px;
  }
  .main-content {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box {
    margin: 5px 0;
  }
}
</style>>
