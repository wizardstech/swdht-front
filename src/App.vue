<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout"/>
    </component>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      layout: 'div'
    }
  }
}
</script>

<style lang="scss">

html {
  margin: 0;
  padding: 0;
}

body{
  margin: 0 !important;
  padding: 0 !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.m-5 {
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
