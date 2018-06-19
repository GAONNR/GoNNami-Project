<template>
<div id="app">
  <nav class="navbar is-primary">
    <!-- navbar brand, navbar menu... -->
    <div class="navbar-brand">
      <!-- navbar items, navbar burger... -->
      <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    </div>
  </nav>

  <div class="container">
    <router-view/>
  </div>

  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Developed by G40N
        </p>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
