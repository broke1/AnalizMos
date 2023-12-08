<template>
  <section class="about_expertise_section">
    <div class="about_expertise_section_container">
      <div 
        ref="about_expertise_section_line" 
        class="about_expertise_section_container_line"
        :data-id="0"
        :class="{about_expertise_section_container_line__show: isRowShow[0]}"
      ></div>
      <div 
        ref="about_expertise_section_block"
        :data-id="1"
        class="about_expertise_section_container_block"
        :class="{about_expertise_section_container_block__show: isRowShow[1]}"
      >
        <div 
          class="about_expertise_section_container_block_title"
          v-html="this.$store.state.aboutExpertise.title"
        ></div>
        <div 
          class="about_expertise_section_container_block_subtitle"
          v-for="item in this.$store.state.aboutExpertise.textarr"
          :key="{item}"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>


export default {
  name: 'AboutExpertiseSection',
  data(){
    return {
      isRowShow: {},
      mobile: false
    }
  },
  created () {
    screen.width < 450 ? this.mobile = true : this.mobile = false
    window.addEventListener("resize", this.handleResize)
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(  (entry) => {
        if (entry.isIntersecting) {
          console.log("wrer")
          this.isRowShow[entry.target.dataset.id] = entry.isIntersecting
        }
      })
    },
    handleResize () {
      screen.width < 450 ? this.mobile = true : this.mobile = false
    }
  },
  mounted() {
    let observer = new IntersectionObserver(this.handleIntersection,{
      threshold: [this. mobile ? 0 :0.5],
    })
    for (let el of Object.values(this.$refs)) {
      observer.observe(el)
    }

    this.observer = observer

  },
  beforeUnmount() {
    this.observer.disconnect()
  },
}

</script>

<style src="./AboutExpertise.sass" lang="sass"></style>