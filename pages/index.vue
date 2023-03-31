<template>
  <div>
    <nuxt-link to="/home">home</nuxt-link>
    <nuxt-child/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NuxtProducts from "~/components/ProductComponent.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {NuxtProducts}
})
</script>
