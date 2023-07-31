<template>
  <section class="qualidade" id="qualidade">
    <div class="qualidade-item">
      <h2>I loved the challenges</h2>
      <p>"Even though I had a hard time, I loved doing them all.".</p>
    </div>

    <div class="qualidade-item">
      <h2>Didactics</h2>
      <p>
        "The teacher has incredible dynamics to control the flow of the class".
      </p>
    </div>

    <div class="qualidade-item">
      <h2>Support</h2>
      <p>
        "Whenever I had a problem, support resolved it as quickly as possible.
        possible".
      </p>
    </div>

    <div class="qualidade-item">
      <h2>Broad Knowledge</h2>
      <p>
        “Fantastic course that improves knowledge in the area of Development, a
        tool that will be essential in the future, both from the educational
        point of view as assistance, to achieve a standard of excellence.”
      </p>
    </div>
    <div class="qualidade-item">
      <h2>Online Activities</h2>
      <p>
        “I really liked the format of the course! Online activities were great,
        too bad time goes by so fast for what there is to to discuss. I am
        immensely grateful for the opportunity to have taken the course and to
        get to know more closely the work they do. Congratulations!”.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.horarioTempoReal();
  },
  methods: {
    horarioTempoReal() {
      var clock = document.getElementById("tempoReal");

      setInterval(function () {
        clock.innerHTML = new Date().toLocaleString().substr(11, 8);
      }, 1000);
    },
    alertEmail() {
      alert("Email cadastrado com sucesso");
    },
  },
  computed: {
    toLocaleStringAleatorio() {
      return new Date().toLocaleDateString();
    },
  },
};
</script>

<style scoped>
body,
h1,
h2,
p,
ul,
li,
a {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  color: #222222;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

* {
  box-sizing: border-box;
}

/*Super Info*/
.superinfo-bg {
  background: #0762c8;
  color: white;
}

.superinfo {
  display: flex;
  padding: 15px;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 960px;
  justify-content: space-between;
}

.superinfo p,
.superinfo a {
  margin: 0 10px 10px 10px;
}

.superinfo-bg a {
  color: white;
}

/* Menu */

.menu-bg {
  background: #1f2a44;
}

.menu {
  max-width: 960px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.menu a {
  color: white;
}

.menu-logo a {
  font-size: 2.25em;
  font-weight: bold;
  margin: 0 10px;
}

.menu-nav ul {
  display: flex;
  flex-wrap: wrap;
}

.menu-nav a {
  font-size: 1.25em;
  display: block;
  padding: 10px;
}

.menu-nav a:hover {
  color: #0762c8;
}

/*Introducao*/

.introducao {
  font-size: 3em;
  line-height: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 10px;
}

/* Sobre */

.sobre {
  border-top: solid 2px #0762c8;
  border-bottom: 2px solid #0762c8;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
}

.sobre-info {
  flex: 2 1 300px;
  margin: 0 10px;
}

.sobre-info h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

.sobre-info p {
  font-size: 1.25em;
  line-height: 1.4;
  margin-bottom: 1em;
  color: #7c7c7c;
}

.sobre-img {
  flex: 1 1 220px;
  margin: 0 10px;
}
.sobre-img2 {
  flex: 1 1 220px;
  margin: 0 10px;
}

/* Primeiro Passos */

.primeiro-passos {
  border-top: solid 2px #2c70ff;
  border-bottom: 2px solid #2c70ff;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
}

.primeiro-passos-info {
  flex: 2 1 300px;
  margin: 0 10px;
}

.primeiro-passos-info h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

.primeiro-passos-info p {
  font-size: 1.25em;
  line-height: 1.4;
  margin-bottom: 1em;
  color: #7c7c7c;
}

.primeiro-passos-img {
  flex: 1 1 220px;
  margin: 0 10px;
}
.primeiro-passos-img2 {
  flex: 1 1 220px;
  margin: 0 10px;
}

/*Produtos*/

.produtos {
  max-width: 960px;
  margin: 60px auto;
}

.produtos h1 {
  font-size: 3em;
  margin: 0 10px 60px 10px;
}

.produtos h3 {
  margin: 0 10px 60px 15px;
}

.produtos-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-items: flex-end;
}

.produtos-item {
  /* flex: 1px; */
  flex: 2 2;
  margin: 10px;
}

.produtos-item h2 {
  font-size: 3em;
  color: #a4a4a4;
  padding: 60px 20px;
  background: #f7f7f7;
}

.purple {
  border-top: 8px solid #ae81ff;
}

.pink {
  border-top: 8px solid #ed145b;
}

.blue {
  border-top: 8px solid #1f2a44;
}

.gray {
  border-top: 8px solid #d0d3d4;
}

.aqua {
  border-top: 8px solid #63b1bc;
}

.yellow {
  border-top: 8px solid #efb661;
}

.bluedark {
  border-top: 8px solid #0762c8;
}

/*Preco*/

.preco {
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  background: #f7f7f7;
  justify-content: center;
}

.preco-item {
  flex: 1 2 3;
  border: 4px solid white;
  padding: 20px;
  margin: 10px;
}

.preco-item h2 {
  font-size: 3em;
  color: #a4a4a4;
  text-align: center;
  margin-top: 20px;
}

.preco-item span {
  max-width: 300px;
  margin: 20px auto;
  display: block;
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  padding: 10px 0 5px 0;
  border-top: 4px solid white;
  border-bottom: 4px solid white;
}

.preco-item sup {
  font-size: 1.5rem;
}

.preco-item ul {
  max-width: 300px;
  margin: 20px auto;
  font-size: 1.25em;
  font-style: italic;
  margin-bottom: 15px;
  color: #7c7c7c;
}

.preco-item li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* .preco-item li::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  background: #2c70ff;
  border-radius: 50%;
} */

.preco-item a {
  max-width: 300px;
  display: block;
  margin: 20px auto;
  border: 4px solid;
  color: #222222;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.25em;
  padding: 15px 0;
  text-align: center;
}

@media (max-width: 800px) {
  .preco {
    padding-left: 10px;
    padding-right: 10px;
  }
  .preco .preco-item:nth-child(3) {
    order: -2;
  }
  .preco .preco-item:nth-child(2) {
    order: -1;
  }
}

/*Qualidade*/

.qualidade {
  max-width: 960px;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;
}

.qualidade-item {
  flex: 1 1 300px;
  margin: 20px 10px;
}

.qualidade-item h2 {
  font-size: 2.25em;
  margin-bottom: 20px;
}

.qualidade-item h2:before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 30px;
  margin-right: 10px;
}

.qualidade-item:nth-of-type(3n + 1) h2::before {
  background: #efb661;
}

.qualidade-item:nth-of-type(3n + 2) h2::before {
  background: #ed145b;
}

.qualidade-item:nth-of-type(3n + 3) h2::before {
  background: #63b1bc;
}

.qualidade-item p {
  font-size: 1.25em;
  line-height: 1.4;
  color: #7c7c7c;
}

/* Newsletter */

.newsletter {
  background: #f7f7f7;
  padding: 60px calc((100% - 960px) / 2);
  display: flex;
  flex-wrap: wrap;
}

.newsletter-info {
  flex: 1 1 240px;
  margin: 0 10px;
}

.newsletter-info h2 {
  font-size: 3em;
  color: #a4a4a4;
}

.newsletter-info p {
  font-size: 1.25em;
  font-style: italic;
  max-width: 230px;
  color: #7c7c7c;
  margin-bottom: 10px;
}

.newsletter-form {
  flex: 2 1 260px;
  margin: 0 10px;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
}

.newsletter-form input {
  flex: 3 1 260px;
  font-size: 1.25em;
  color: #7c7c7c;
  font-style: italic;
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  border: 4px solid #2c70ff;
  background: transparent;
  padding: 15px 10px;
  margin: 0px;
  border-radius: 0px;
}

.newsletter-form button {
  flex: 1 1 200px;
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 2.25em;
  font-weight: bold;
  text-transform: uppercase;
  background: #2c70ff;
  color: white;
  margin: 0px;
  cursor: pointer;
  border: 0px;
  padding: 10px 10px;
}

@media (max-width: 600px) {
  .newsletter-form button {
    font-size: 1.5em;
  }
}

/*Footer*/

.footer {
  display: flex;
  height: 80px;
  background: #2c70ff;
  align-items: center;
}

.footer p {
  flex: 1;
  text-align: center;
  font-size: 2.25em;
  color: white;
}

pre code {
  overflow-x: auto;
  color: #525252;
  white-space: initial;
  padding: 1.2em 1.4em;
  font-size: 0.85rem;
  line-height: 1.6rem;
  display: block;
}

code {
  color: #d63200;
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  white-space: nowrap;
  /* text-align: center;
  align-items: center; */
}

code,
pre {
  font-family: "Roboto Mono", Monaco, courier, monospace;
  font-size: 0.85em;
  background-color: #f8f8f8;
  -webkit-font-smoothing: initial;
  -moz-osx-font-smoothing: initial;
}

.demo {
  margin-top: 1em;
  overflow-x: auto;
  user-select: none;
  border-radius: 2px;
  padding: 25px 35px;
  margin-bottom: 40px;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  border: 1px solid #eee;
}

.demo-li {
  padding: 4px;
}

.color-preCode {
  color: #2973b7;
}

.color-preCode-verde {
  color: #42b983;
}
</style>