<template>
  <section 
    class="menu_section"
    :class="{ menu_section_sticky: isSticky }"
  >
    <div class="container">
      <div class="menu_section_logo"></div>
      <div class="menu_section_links_block">
        <a 
          v-for="link in this.$store.state.menu" 
          :key="link.name" 
          :href="link.url"
          @click="(e) => handleClickMenu(e,link.url)"
          class="menu_section_links_block_link"
        >
          {{ link.name }}
        </a>
      </div>
      <div class="menu_section_call_back">
        {{ "Заказать консультацию" }}
      </div>
    </div>
  </section>
  
</template>

<script>


export default {
  name: 'MenuSection',
  data() {
    return {
      isSticky: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.isSticky = window.scrollY > 150
    },
    handleClickMenu (e,url) {
      e.preventDefault()
      document.querySelector(`.${url}_section`).scrollIntoView({
        behavior: "smooth"
      })
    }
  }
}
</script>

<style src="./Menu.sass" lang="sass"></style>