<template>
  <header class="bg-primary">
    <div class="container">
      <b-navbar variant="faded" class="m-0 p-0" type="light">
        <b-navbar-brand :to="'/'" class="mb-0">
          <img alt="Ikinyarwanda" src="@/assets/images/logo.svg" />
        </b-navbar-brand>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.navbar-brand {
  max-width: 220px;
  width: 100%;
  margin: 0;
  padding: 0;
}
.navbar-brand img {
  max-width: 220px;
}
</style>
