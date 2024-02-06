<template>
  <section 
    class="menu_section"
    :class="{ menu_section_sticky: isSticky }"
  >
    <div class="container">
      <div class="menu_section_logo"></div>
      <div 
        v-if="!mobile"
        class="menu_section_links_block"
      >
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
      <div 
        class="menu_section_call_back"
        @click="() => handleClickCallBack()"
      >
        {{ "Заказать консультацию" }}
      </div>
      <div 
        v-if="mobile"
        class="menu_section_links_block_mobile"
        @click="handleOpenMenu"
      >
        <div class="menu_section_links_block_mobile_icon"></div>
      </div>
    </div>
    <div 
      class="menu_section_mobile_menu"
      :class="{ menu_section_mobile_menu__open: openMenu }"
    >
      <div 
        class="menu_section_mobile_menu__close"
        @click="handleOpenMenu"
      ></div>
      <a 
        v-for="link in this.$store.state.menu" 
        :key="link.name" 
        :href="link.url"
        @click="(e) => handleClickMenu(e,link.url)"
        class="menu_section_mobile_menu_link"
      >
        {{ link.name }}
      </a>
    </div>
  </section>
  
</template>

<script>


export default {
  name: 'MenuSection',
  data() {
    return {
      isSticky: false,
      mobile: false,
      openMenu: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    screen.width < 450 ? this.mobile = true : this.mobile = false
    window.addEventListener("resize", this.handleResize)
  },
  methods: {
    handleScroll () {
      this.isSticky = window.scrollY > 150 && !this.mobile
    },
    handleClickMenu (e,url) {
      e.preventDefault()
      document.querySelector(`.${url}_section`).scrollIntoView({
        behavior: "smooth"
      })
      screen.width < 450 && this.handleOpenMenu()
    },
    handleClickCallBack () {
      this.$store.state.form.show = true
      document.querySelector('body').style.heigth = "100vh";
      document.querySelector('body').style.overflow = "hidden";
    },
    handleOpenMenu () {
      this.openMenu = !this.openMenu
    },
    handleResize () {
      screen.width < 450 ? this.mobile = true : this.mobile = false
    }
  }
}
</script>

<style src="./Menu.sass" lang="sass"></style>