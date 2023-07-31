<template>
  <section class="produtos" id="produto">
    <div class="row mb-2">
      <div class="col-md-12">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-secondary"
              >Programação</strong
            >
            <h3 class="mb-0">
              <a class="text-dark" href="#"
                >Como funciona o universo dos códigos</a
              >
            </h3>
            <div class="mb-1 text-muted">18 Jul</div>
            <p class="card-text mb-auto">
              A seguir os dois maiores blogs atuais de novas tendências
              tecnológicas.
            </p>
          </div>
          <img
            alt="Thumbnail [200x250]"
            data-holder-rendered="true"
            style="width: 400px; height: 250px; background-size: cover"
            data-src="holder.js/200x250?theme=thumb"
            class="card-img-right flex-auto d-none d-md-block"
            src="https://thumbs.dreamstime.com/b/c%C3%B3digo-fonte-e-papel-de-parede-do-desktop-pela-linguagem-programa%C3%A7%C3%A3o-com-codi-124708208.jpg"
          />
        </div>
      </div>
      <div class="col-md-12">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-success"
              >Programação</strong
            >
            <h3 class="mb-0">
              <a class="text-dark" href="#">Vue Vue</a>
            </h3>
            <div class="mb-1 text-muted">18 de Jul</div>
            <p class="card-text mb-auto">
              Vue Vue e um blog sobre um dos frameworks mais utilizados no
              momento.
            </p>
            <router-link to="/posts"
              ><span class="xptoVerde">Continue lendo mais...</span>
            </router-link>
          </div>
          <img
            class="card-img-right flex-auto d-none d-md-block"
            data-src="holder.js/200x250?theme=thumb"
            alt="Thumbnail [200x250]"
            src="data:image/png;base64,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"
            data-holder-rendered="true"
            style="width: 400px; height: 250px"
          />
        </div>
      </div>
      <div class="col-md-12">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-primary"
              >Programação</strong
            >
            <h3 class="mb-0">
              <a class="text-dark" href="#">Reage React</a>
            </h3>
            <div class="mb-1 text-muted">18 Jul</div>
            <p class="card-text mb-auto">
              Reage React e um blog de uma das maiores bibliotecas javascript do
              momento.
            </p>
            <router-link to="/postsReact"
              ><span class="xptoAzul">Continue lendo mais...</span>
            </router-link>
          </div>
          <img
            alt="Thumbnail [200x250]"
            data-holder-rendered="true"
            style="width: 400px; height: 250px; background-size: cover"
            data-src="holder.js/200x250?theme=thumb"
            class="card-img-right flex-auto d-none d-md-block"
            src="https://conexaopanvel.faccat.br/wp-content/uploads/2020/06/1_vHHBwcUFUaHWXntSnqKdCA.png"
          />
        </div>
      </div>
      <div class="col-md-12">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 xptoRoxo">Programação</strong>
            <h3 class="mb-0">
              <a class="text-dark" href="#">GeekBlog</a>
            </h3>
            <div class="mb-1 text-muted">18 Jul</div>
            <p class="card-text mb-auto">
              O GeekBlog promove um papo reto sobre a profissão de programador
              com dicas de carreira, back-end, front-end, full stack, gestão de
              TI, QA, machine learning, inteligência artificial e tudo mais que
              envolve a área de tecnologia.
            </p>
            <a
              target="_blank"
              href="https://blog.geekhunter.com.br/"
              class="xptoRoxo"
              >Continue lendo mais...</a
            >
          </div>
          <img
            alt="Thumbnail [200x250]"
            data-holder-rendered="true"
            style="width: 400px; height: 250px; background-size: cover"
            data-src="holder.js/200x250?theme=thumb"
            class="card-img-right flex-auto d-none d-md-block"
            src="https://blog.nubank.com.br/wp-content/uploads/2022/05/Mercado-geek-destacada.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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

.xptoVerde {
  color: #42b883;
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
  border-top: solid 2px #42b883 !important;
  border-bottom: 2px solid #42b883 !important;
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
.green {
  border-top: 8px solid #42b883;
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

.xptoRoxo {
  color: #9412dc;
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