<template>
  <div class="container" id="app">
    <TopHeader/>
    <MiddleBody/>
    <BottomFooter/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'App',
  computed: {
    ...mapGetters([]),
  },
  components: {
    TopHeader: () => import('./components/header'),
    MiddleBody: () => import('./components/body'),
    BottomFooter: () => import('./components/footer'),
  }
}
</script>

<style>
@import "assets/css/style.css";
</style>
