<template>
  <div id='app'>
    <Header />
    <Home />
    <Footer />
  <!-- <div v-for="(info,index) in information" :key="index">
    <p>{{info.orderNumber}}</p>
  </div> -->
  </div> 

</template>

<script>
//import HelloWorld from './components/MainPage.vue'
import './styles/global.css' 
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',  
  
  data(){
    return {
      information:[]
    }
  },
  
  mounted(){
    this.$axios.get('http://localhost:3001/')
    .then((response) => (this.information = response.data))
    
  },

  components: {
    Header,
    Home,
    Footer
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
