<template>
  <div id="app">
    <header class="header">
      <div class="header__logo"><h1>Assassination List</h1></div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 10px;
  color: #fff;
  background-color: #10555A;
  margin-bottom: 10px;
}

.header__search input[type=text] {
  padding: 6px;
  border: none;
}

.header__search input[type=submit] {
  float: right;
  padding: 6px 10px;
  border: none;
  cursor: pointer;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
