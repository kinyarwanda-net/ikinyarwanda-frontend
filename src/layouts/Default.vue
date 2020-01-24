<template>
  <div>
    <Header />
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
};
</script>
