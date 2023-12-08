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
        <div 
          ref="uslugi_row_first" 
          :data-id="0"
          class="uslugi_section_container_block_row"
          :class="{uslugi_section_container_block_row__show: isRowShow[0]}"
        >
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
        <div 
          ref="uslugi_row_second" 
          :data-id="1"
          class="uslugi_section_container_block_row"
          :class="{uslugi_section_container_block_row__show: isRowShow[1]}"
        >
          <div 
            class="uslugi_section_container_block_row_item"
            v-for="item in this.$store.state.uslugi.items.filter( (item, index) => index > 2 && item && index < 6)"
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
        <div 
          ref="uslugi_row_third" 
          :data-id="2"
          class="uslugi_section_container_block_row"
          :class="{uslugi_section_container_block_row__show: isRowShow[2]}"
        >
          <div 
            class="uslugi_section_container_block_row_item"
            v-for="item in this.$store.state.uslugi.items.filter( (item, index) => index > 5 && item)"
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
      <div 
        ref="uslugi_line" 
        class="uslugi_section_container_line"
        :data-id="3"
        :class="{uslugi_section_container_line__show: isRowShow[3]}"
      ></div>
    </div>
  </section>
  
</template>

<script>


export default {
  name: 'UslugiSection',
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
      threshold: [this.mobile ? 0 : 0.5],
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

<style src="./Uslugi.sass" lang="sass"></style>