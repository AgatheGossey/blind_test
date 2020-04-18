<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  min-height: 100%;
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #210B37;
  background: rgb(148,242,245);
  background: linear-gradient(90deg, rgba(148,242,245,1) 0%, rgba(5,240,40,1) 100%);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
