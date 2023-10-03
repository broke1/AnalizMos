<template>
  <section class="main_page">
    <Menu />
    <Title />
  </section>
</template>

<script>

import Menu from './Menu/Menu.vue'
import Title from './Title/Title.vue'

export default {
  name: 'MainPage',
  components: {
    Menu,
    Title
  },
}
</script>

<style src="./MainPage.sass" lang="sass"></style>


