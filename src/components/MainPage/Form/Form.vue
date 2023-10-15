<template>
  <section 
    class="form_section"
    :class="{form_section__show: this.$store.state.form.show}"
  >
  </section>
  
</template>

<script>


export default {
  name: 'FormSection',
}
</script>

<style src="./Form.sass" lang="sass"></style>