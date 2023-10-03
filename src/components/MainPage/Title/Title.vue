<template>
  <section class="title_section">
    <div class="title_section_container">
      <div 
        class="title_section_container_title"
        v-html="this.$store.state.title"
      ></div>
      <div class="title_section_container_line"></div>
    </div>
  </section>
  
</template>

<script>


export default {
  name: 'TitleSection',
}
</script>

<style src="./Title.sass" lang="sass"></style>