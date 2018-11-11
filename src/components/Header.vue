<template>
  <div class="container">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand logo" to="/">
          <p>
            <span class="b">B</span><span class="book">ook </span><span class="m">M</span><span class="market">arket</span>
          </p>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <router-link to="/" class="nav-link">ГОЛОВНА</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/books" class="nav-link">КНИГИ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/genres" class="nav-link">ЖАНРИ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/authors" class="nav-link">АВТОРИ</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  header {
    margin-bottom: 20px;
  }
  .logo {
    font-size: 40px;
    color: black;
    text-decoration: none;
  }
  .logo .b {
    color: #0464F1;
  }
  .logo .m {
    color: #ADD9D3;
  }
  .logo:hover {
    text-decoration: none;
    color: black;
  }
  .logo > p {
    margin: 0;
    padding: 0;
  }
</style>
