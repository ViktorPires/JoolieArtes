<template>
  <NavBar/>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a @click="$router.push('/')" href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Produtos</li>
    </ol>
  </nav>
  <div translate="translate" class="bd-example  vue-example-b-grid-equal-width">
    <div class="bv-example-row container">
      <div class="row" id="container">
        <div class="col">
          <font style="vertical-align:inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/kit_higiene08.jpg" alt="Kit higiene" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Kit higiêne</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
        <div class="col">
          <font style="vertical-align: inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/tapete_kit.jpg" alt="Tapete" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Kit tapete</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
        <div class="col">
          <font style="vertical-align: inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/chaveiro.jpg" alt="Chaveiro" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Chaveiro</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
        <div class="col">
          <font style="vertical-align: inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/bolsa_preta.jpg" alt="Bolsa preta" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Bolsa</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
        <div class="col">
          <font style="vertical-align: inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/chaveiro03.jpg" alt="Chaveiro" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Chaveiro Arco-Iris</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
        <div class="col">
          <font style="vertical-align: inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/cestao_m.jpg" alt="Cesta" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Cestão</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
        <div class="col">
          <font style="vertical-align: inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/kit_higiene01.jpg" alt="Kit higiene" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Kit higiêne chuva amor</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
        <div class="col">
          <font style="vertical-align: inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/chaveiro04.jpg" alt="Chaveiro" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Chaveiro ursinho</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
        <div class="col">
          <font style="vertical-align: inherit;">
            <div>
              <article class="card mb-2" style="max-width: 20rem;">
                <img src="@/assets/kit_higiene05.jpg" alt="Kit higiene" class="card-img-top">
                <div class="card-body">
                  <h4 class="card-title">Kit porta sonhos</h4>
                  <p class="card-text">  </p>
                  <a role="button" tabindex="0" href="#" target="_self" class="btn btn-primary">COMPRAR</a>
                </div>
              </article>
            </div>
          </font>
        </div>
      </div>
    </div>
  </div>
  <FooterBar/>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
export default {
  name: 'SobrePage',
  components: {
    FooterBar,
    NavBar,
  },
}
</script>

<style scoped>
div#container {
  margin-bottom: 3rem;
}
.breadcrumb {
  margin-top: 1.5rem;
  margin-left: 4rem;
}
.breadcrumb-item a {
  text-decoration: none;
  color: #7ed9c8;
}
h4 {
  margin-top: 1rem;
  color: #23756e;
  /* text-align: center; */
}
p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 10rem;
  margin-right: 10rem;
  color: #23756e;
  text-align: justify;
}
</style>