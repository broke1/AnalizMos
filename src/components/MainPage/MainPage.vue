<template>
  <section class="main_page">
    <Menu />
    <Title />
    <Uslugi />
    <WhyUs />
  </section>
</template>

<script>

import Menu from './Menu/Menu.vue'
import Title from './Title/Title.vue'
import Uslugi from './Uslugi/Uslugi.vue'
import WhyUs from './WhyUs/WhyUs.vue'

export default {
  name: 'MainPage',
  components: {
    Menu,
    Title,
    Uslugi,
    WhyUs
  },
}
</script>

<style src="./MainPage.sass" lang="sass"></style>


