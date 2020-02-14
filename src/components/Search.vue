<template>
  <div class="grab-search bg-white border border-dark radius-2 py-2 shadow-lg">
    <form method="post">
      <div class="row">
        <div class="d-none d-lg-block col-lg-1 p-0">
          <icon class="icon mt-2" icon="search" />
        </div>
        <div class="col-9 col-md-9 col-lg-8">
          <input v-model="word" type="text" class="form-control" placeholder="Andika ijambo..." />
        </div>
        <div class="col-3 col-md-3 col-lg-3 text-center">
          <button v-on:click.prevent="search" class="btn btn-primary col">
            <icon class="icon mt-2 d-lg-none" icon="search" />
            <span class="d-none d-lg-block d-xl-block">Shakisha</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  data() {
    return {
      word: ''
    };
  },
  methods: {
    search() {
      if (this.word) {
        this.$router.push(`/ijambo/${this.word}`);
      }
    }
  }
};
</script>

<style scoped>
.grab-search {
  width: 99%;
  max-width: 700px;
  margin: auto;
  padding: 0 0.5%;
  display: block;
}

.grab-search input {
  border: none !important;
}

.grab-search .icon {
  font-size: 22px;
}
</style>
