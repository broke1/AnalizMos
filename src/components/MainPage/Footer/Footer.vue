<template>
  <section class="footer_section">
    <div class="footer_section_company">
      {{ this.$store.state.footer.company }}
    </div>
    <div class="footer_section_autor">
      {{ this.$store.state.footer.author }}
    </div>
  </section>
</template>

<script>


export default {
  name: 'FooterSection',
}

</script>

<style src="./Footer.sass" lang="sass"></style>