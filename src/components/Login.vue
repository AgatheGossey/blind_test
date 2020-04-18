<template>
  <div id="login">
    <h1>Mon chair & tendre Blind Test...</h1>
    <div id="cardContainer">
      <v-card class="mx-auto card">
        <p>Quel est ton p'tit nom ?</p>
        <div id="input">
          <v-text-field
            class="pa-0"
            label="Bgdu59"
            single-line
            outlined
          ></v-text-field>
        </div>
        <div class="text-center">
          <v-btn id="btn" @click="go" large>Ci parti mon kiki !</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    go() {
      this.$router.push({ name: 'Game'})
    }
  }
}
</script>

<style scoped>
  #login {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  #cardContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }

  .card {
    min-width: 500px;
    padding: 3em 2em;
  }

  h1 {
    text-transform: uppercase;
    position: absolute;
    margin: auto;
    display: block;
    padding: 2em;
    left:50%;
    transform: translateX(-50%)
  }

  p {
    text-align: center;
  }

  #input {
    margin: 1em auto;
    padding: 0;
    width: 60%;
  }

  #btn {
    background-color:#994ac7;
    color: white;
    font-weight: bold;
  }
</style>