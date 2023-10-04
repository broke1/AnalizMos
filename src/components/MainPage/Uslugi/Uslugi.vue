<template>
  <section class="uslugi_section">
    <div class="uslugi_section_container">
      <div 
        class="uslugi_section_container_title"
        v-html="this.$store.state.uslugi.title"
      ></div>
      <div 
        class="uslugi_section_container_title_sub"
        v-html="this.$store.state.uslugi.sub_title"
      ></div>
      <div class="uslugi_section_container_block">
        <div class="uslugi_section_container_block_row">
          <div 
            class="uslugi_section_container_block_row_item"
            v-for="item in this.$store.state.uslugi.items.filter( (item, index) => index < 3 && item)"
            :key="item.title"
          >
            <div class="uslugi_section_container_block_row_item_title">
              {{ item.title }}
            </div>
            <div class="uslugi_section_container_block_row_item_subtitle">
              {{ item.subtitle }}
            </div>
          </div>
        </div>
        <div class="uslugi_section_container_block_row">
          <div 
            class="uslugi_section_container_block_row_item"
            v-for="item in this.$store.state.uslugi.items.filter( (item, index) => index > 2 && item)"
            :key="item.title"
          >
            <div class="uslugi_section_container_block_row_item_title">
              {{ item.title }}
            </div>
            <div class="uslugi_section_container_block_row_item_subtitle">
              {{ item.subtitle }}
            </div>
          </div>
        </div>
      </div>
      <div class="uslugi_section_container_line"></div>
    </div>
  </section>
  
</template>

<script>


export default {
  name: 'UslugiSection',
}

</script>

<style src="./Uslugi.sass" lang="sass"></style>