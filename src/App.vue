<template>
  <div id="app">
    <i-header></i-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header";

export default {
  name: "app",
  components: {
    IHeader: Header
  }
};
</script>

<style lang="less">
body,
p,
ul {
  margin: 0;
  padding: 0;
}
</style>
