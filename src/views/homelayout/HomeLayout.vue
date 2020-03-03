<template>
  <div class="home-layout-container">
      <Header></Header>
      <main class="main-content">
        <router-view/>
      </main>
      <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
};
</script>
