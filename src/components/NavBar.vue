<template>
  <nav class="navbar navbar-expand-lg fixed-top position-relative menu">
    <div class="container-fluid">
      <a @click="$router.push('/')" href="#"><img class="position-absolute" src="@/assets/logoJooli.png" alt="Logotipo"></a>
      <form @submit.prevent="" class="input-group position-absolute">
        <div class="position-relative">
          <input type="search" class="form-control rounded-pill" placeholder="Buscar" aria-label="Buscar" required/>
          <button type="submit" class="position-absolute fixed-top"><i class="fa fa-search"></i></button>
        </div>
      </form>
      <div>
        <ul class="navbar-nav">
          <li><a class="nav-link" @click="$router.push('/')" href="#"><i class="fa-solid fa-house fa-lg"></i></a></li>
          <li><a class="nav-link" @click="$router.push('/login')" href="#">Login</a></li>
          <li><a class="nav-link" @click="$router.push('/produtos')" href="#">Produtos</a></li>
          <li><a class="nav-link" @click="$router.push('/sobre')" href="#">Sobre</a></li>
          <li><a class="nav-link" @click="$router.push('/contato')" href="#">Contato</a></li>
          <li><a class="nav-link" @click="$router.push('/sacola')" href="#"><i class="fa-solid fa-bag-shopping fa-lg"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default{
  name: 'NavBar'
}
</script>

<style scoped>
.menu{
  background-color: #7ed9c8;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 3rem;
}

.container-fluid a img {
  bottom: 0.3rem;
  left: 0;
}

.navbar-nav li a {
  text-decoration: none;
  font-family: "Lustria", "Para", arial;
  color: #000000;
  transition: all 0.3s;
}

.navbar-nav li a:hover {
  color: white;
}

.fixed-top img {
  margin-top: 0.2rem;
  margin-left: 1rem;
}

.input-group {
  top: 0.8rem;
  left: 7.5rem;
}

form {
  width: 14rem;
}

.form-control {
  width: 14rem;
  height: 1.5rem;
  text-indent: 5px;
}

.form-control::placeholder {
  color: #000;
}

.form-control:focus {
  background-color: yellow;
  box-shadow: none;
  border:none;
}

button {
  z-index: 1;
  background: none;
  border: none;
  left: 12.5rem;
}

</style>