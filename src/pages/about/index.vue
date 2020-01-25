<template>
  <component :is="layout">
    <div class="p-2">About</div>
    <router-link :to="'/'">Home</router-link>
  </component>
</template>

<script>
export default {
  name: 'about',
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  }
};
</script>
