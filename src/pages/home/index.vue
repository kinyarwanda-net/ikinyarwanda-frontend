<template>
  <component :is="layout">
    <div id="welcome-screen">
      <div class="container">
        <div class="grab-search-section clearfix">
          <div class="row align-items-center h-100">
            <div class="col-12">
              <div class="justify-content-center align-self-center text-center">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="photo-copyright">&copy; Photo <span> {{ $t("message.by") }} </span> <b>Kigali Convention Centre</b></span>
    </div>
  </component>
</template>

<script>
import Search from '../../components/Search';
export default {
  name: 'home',
  components: {
    Search
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  }
};
</script>

<style scoped>
#welcome-screen {
  background: url('../../assets/images/kigali.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}
#welcome-screen::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background: rgba(0, 0, 0, 0.35);
}
.grab-search-section {
  height: 75vh;
}
.photo-copyright {
  background: rgba(0, 0, 0, 0.5);
  padding: 3px 15px;
  font-size: 10px;
  color: #ffffff;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
