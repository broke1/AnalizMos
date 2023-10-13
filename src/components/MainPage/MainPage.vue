<template>
  <section class="main_page">
    <Menu />
    <Title />
    <Uslugi />
    <WhyUs />
    <AboutExpertise />
    <Contacts />
    <Footer />
  </section>
</template>

<script>

import Menu from './Menu/Menu.vue'
import Title from './Title/Title.vue'
import Uslugi from './Uslugi/Uslugi.vue'
import WhyUs from './WhyUs/WhyUs.vue'
import AboutExpertise from "./AboutExpertise/AboutExpertise.vue"
import Contacts from "./Contacts/Contacts.vue"
import Footer from "./Footer/Footer.vue"

export default {
  name: 'MainPage',
  components: {
    Menu,
    Title,
    Uslugi,
    WhyUs,
    AboutExpertise,
    Contacts,
    Footer
  },
}
</script>

<style src="./MainPage.sass" lang="sass"></style>


