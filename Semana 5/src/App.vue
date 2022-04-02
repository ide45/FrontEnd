<template>
  <nav>
    <router-link to="/" @click="moveUp"><img src="../src/assets/logo.png" alt="logo"></router-link>
    <router-link to="/boss" @click="moveUp">Página Pastelero</router-link>
    <div class="ignore">
      <p class="text">{{$store.state.items}}</p> 
      <router-link to="/checkOut" @click="moveUp"><img src="../src/assets/cart.png" 
      alt="logo"></router-link>
    </div>
    
  </nav>
  <router-view/>
</template>

<script>
export default {
  methods:{
    moveUp(){
      window.scrollTo(0,0);
    }
  }
}
</script>
<style>
*{  
  margin: 0px;
  max-width: 2000px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;
  position: fixed;
  background-color: rgb(240, 255, 255);
  border: 2px solid #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

nav a.router-link-exact-active, a:hover {
  color: #42b983;
}

nav a img{
  border: 1px solid black;
  max-width: 50px;
  transition: .5s;
  transition-timing-function: ease-in-out;
}

nav a img:hover{
  transition: .5s;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.205);
  transform: scale(1.1);
}

.ignore{
  position: absolute;
  right: 20px;
  top: 12px;
  
}

.ignore img{
  border: none;
}

.ignore .text{
  position: absolute;
  top: 38%;
  left: 55%;
  transform: translate(-50%, -50%);
}

</style>
