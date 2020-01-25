<template>
  <component :is="layout">
    <div class="p-2">Home</div>
    <router-link :to="'/about'">About</router-link>
  </component>
</template>

<script>
export default {
  name: 'home',
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  }
};
</script>
