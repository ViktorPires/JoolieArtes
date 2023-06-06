<template>
  <NavBar/>
  <div class="container container-margin">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a @click="this.$router.push('/')" href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Contato</li>
      </ol>
    </nav>
    <div class="d-flex flex-wrap flex-row justify-content-center">
      <picture class="foto1">
        <img class="float-left" src="@/assets/Logo_Jooliartes.png" alt="Logo JooliArtes">
      </picture>
      <form ref="form" @submit.prevent="enviarEmail" class="form">
        <div class="mb-3">
          <label class="form-label">Nome</label>
          <input type="text" class="form-control form-input" name="nome" v-model="nome" required>
        </div>
        <div class="mb-3">
          <label class="form-label">E-mail</label>
          <input type="email" class="form-control" name="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Telefone</label>
          <input type="number" class="form-control" name="telefone" v-model="telefone" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Mensagem</label>
          <textarea class="form-control" name="mensagem" v-model="mensagem" style="height: 125px" required></textarea>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-light">Enviar</button>
        </div>
      </form>
      <div class="d-flex flex-column">
        <div class="endereco">
          <h1>Endereço</h1>
          <p>jooliartes@jooliartes</p>
          <p>Rua Ali Perto - Bom Sucesso <br> Gravataí - RS - Brasil</p>
          <p>(51) 99850-0102</p>
        </div>
        <div class="redes-sociais">
          <h1>Redes Sociais</h1>
          <div class="d-flex flex-row justify-content-center">
            <a href="https://www.instagram.com/jooliartes/" target="_blank"><i class="fa-brands fa-instagram fa-3x"></i></a>
            <a href="https://www.facebook.com/Jooliartes" target="_blank"><i class="fa-brands fa-square-facebook fa-3x"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=5551998500102&text&app_absent=0" target="_blank"><i class="fa-brands fa-whatsapp fa-3x"></i></a>
          </div>
        </div>
        <picture class="foto2">
          <img class="Josi" src="@/assets/apresentacao.jpg" alt="Foto Apresentação de Josi">
        </picture>
      </div>
   </div>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import emailjs from 'emailjs-com';

export default {
  name: 'ContatoPage',
  data() {
    return {
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    }
  },
  methods: {
    enviarEmail(e) {
      try {
        emailjs.sendForm('service_oohpcc7', 'template_1fbw7xs', e.target,
            'Sk2yiPwlqsC1Xs2Kr', {
              nome: this.nome,
              email: this.email,
              telefone: this.telefone,
              mensagem: this.mensagem
            })
            .then((resultado) => {
              console.log('SUCESSO!', resultado.status, resultado);
              this.$swal("Sucesso", "Mensagem enviada com sucesso!", "success");
            })
      } catch(error) {
        console.log('ERRO!', error.status, error)
        this.$swal("Algum erro aconteceu!", "Não foi possível enviar sua mensagem!", "error");
      }
      this.nome = ''
      this.email = ''
      this.telefone = ''
      this.mensagem = ''
    },
  },
  components: {
    FooterBar,
    NavBar,
  },
}
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.container-margin {
  margin-bottom: 4.5rem;
}

.breadcrumb {
  margin-top: 1.5rem;
  margin-left: 4rem;
  font-family: "Lustria", "Para", arial;
}

.breadcrumb-item a {
  text-decoration: none;
  color: #7ed9c8;
}

.form {
  margin: 1rem 5rem 0 2rem;
}

label {
  font-family: "Lustria", "Para", arial;
}

input, textarea {
  width: 20rem;
  text-indent: 5px;
  border-color: #7ed9c8;
}

button {
  width: 8rem;
  background-color: white;
  margin-left: 6rem;
  font-family: "Lustria", arial, "Para";
  border-color: #7ed9c8;
  transition: all 0.4s;
}

button:hover {
  background-color: #7ed9c8;
}

.endereco {
  margin-top: 4rem;
}

h1 {
  color: #23756e;
  font-family: "Para", "Lustria", arial;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  font-family: "Lustria", "Para", arial;
  text-align: center;
}

a {
  text-decoration: none;
  color: #000;
}

i {
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.4s;
}

i:hover {
  transform: scale(1.1);
}

.fa-instagram:hover {
  color: #833AB4;
}

.fa-square-facebook:hover {
  color: #4267B2;
}

.fa-whatsapp:hover {
  color: #25D366;
}

.foto1 {
  margin-top: 2rem;
}

.foto2 {
  margin-top: 2rem;
}

.Josi {
  border-radius: 50%;
  border-style: solid;
  border-color: #7ed9c8;
}
</style>