<template>
    <div id="navbarBasicExample" class="navbar-menu"  role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link class="navbar-item" to="/">List of persons</router-link>
        </a>
      
        <a class="navbar-item">
          <router-link class="navbar-item" to="/add">Add new person</router-link>
        </a>
      </div>
    </div>

<div id="app">
  <router-view />
</div>
</template>

<script >
export default {
  mounted() {
      this.$store.dispatch('fetchPeople');
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 60px;
}

</style>
