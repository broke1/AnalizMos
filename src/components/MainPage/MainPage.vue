<template>
  <section class="main_page">
    <Menu />
    <Title />
    <Uslugi />
  </section>
</template>

<script>

import Menu from './Menu/Menu.vue'
import Title from './Title/Title.vue'
import Uslugi from './Uslugi/Uslugi.vue'

export default {
  name: 'MainPage',
  components: {
    Menu,
    Title,
    Uslugi
  },
}
</script>

<style src="./MainPage.sass" lang="sass"></style>


