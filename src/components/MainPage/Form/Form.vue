<template>
  <section 
    class="form_section"
    :class="{form_section__show: this.$store.state.form.show}"
  >
  <div class="form_section_block">
    <input 
      v-model="this.$store.state.form.name"
      placeholder="Имя"
      class="form_section_block_item"
    >
    <input 
      v-model="this.$store.state.form.phone"
      v-maska 
      data-maska="+7 ### ###-##-##"
      placeholder="Телефон"
      class="form_section_block_item"
    >
    <textarea 
      v-model="this.$store.state.form.text" 
      placeholder="Напишите Ваш вопрос"
      class="form_section_block_item"
    ></textarea>
    <div class="form_section_block_btn_row">
      <div 
        class="form_section_block_btn_row_msg_error"
        :class="{form_section_block_btn_row_msg_error__show: this.$store.state.form.msgError}"
      >
        {{ "К сожалению, данные отправить не удалось "}}
      </div>
      <div 
        class="form_section_block_btn_row_btn"
        @click="() => handleClickSend()"
      >
        <div 
          v-show="this.$store.state.form.preloader"
          class="form_section_block_btn_row_btn_preloader"
        ></div>
        <div 
          v-show="!this.$store.state.form.preloader"
        >
          {{  "Отправить" }}
        </div>
        
      </div>
    </div>
    <div 
      class="form_section_block_close_btn"
      @click="() => handleClickClose()"
    >
    </div>
  </div>
  </section>
  
</template>

<script>

import { vMaska } from "maska"

export default {
  name: 'FormSection',
  directives: { maska: vMaska },
  methods: {
    handleClickClose () {
      this.$store.state.form.show = false
      document.querySelector('body').style.heigth = "auto";
      document.querySelector('body').style.overflow = "auto";
    },
    handleClickSend () {
      this.$store.state.form.msgError = false
      this.$store.commit('sendForm')
    }
  }
}
</script>

<style src="./Form.sass" lang="sass"></style>