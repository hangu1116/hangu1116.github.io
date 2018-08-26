<template>
  <div id="app">
    <div class="hello">

      <div class="title">{{title}}</div>
      <div class="addPost">{{addPost}}</div>
      <div class="other">...</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    title: 'Cuiyanjie\'s Notebook',
    addPost:'Add post'
  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hello {
  margin: 2%;
  font-weight: normal;
  font-size: 12px;
  line-height: 30px;
  display: inline;
}
.title{
  margin-left:33%;
  /*width: 30%;*/
  margin-right: calc(23% - 4px);
  color: #a7a8a9;
  display: inline-block;
}
.addPost{
  width:7%;
  height: 30px;
  background-color: #2f81f7;
  color: #ffffff;
  border:1px solid #2f81f7;
  border-radius: 2px;
  display: inline-block;
  margin-right: 1%;
}
.other {
  width:2%;
  height: 30px;
  font-size:16px;
  background-color: #ffffff;
  color: #bfc0c1;
  border:1px solid #bfc0c1;
  border-radius: 2px;
  display: inline-block;
}
</style>
