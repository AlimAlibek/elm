<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'App',
  computed: {
    ...mapGetters([]),
    layout: function(){
      return (this.$route.meta.layout) + '-layout'
    },
  },
}
</script>
