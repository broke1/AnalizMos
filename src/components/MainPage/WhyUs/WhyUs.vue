<template>
  <section class="whyus_section">
    <div class="whyus_section_container">
      <div 
        class="whyus_section_container_title"
        v-html="this.$store.state.whyus.title"
      ></div>
      <div class="whyus_section_container_title_sub">
        <div 
          class="whyus_section_container_title_sub_item"
          v-for="(item, index) in this.$store.state.whyus.title_sub_list"
          :key="{index}"
        >
        {{ item }}
        </div>
      </div>
      <div class="whyus_section_container_block">
        <div class="whyus_section_container_block_left"></div>
        <div 
          ref="whyus_right_block" 
          :data-id="0"
          class="whyus_section_container_block_right"
        >
          <div 
            class="whyus_section_container_block_right_row"
            :style="{ animationDelay: (0.3 * index) + 's' }"
            :class="{whyus_section_container_block_right_row_show: isRowShow[0]}"
            v-for="(item, index) in this.$store.state.whyus.list"
            :key="{item}"
          >
            <div class="whyus_section_container_block_right_row_img"></div>
            <div class="whyus_section_container_block_right_row_text">
              {{item}}
            </div>
          </div>
          <div 
            ref="whyus_overlay" 
            class="whyus_section_container_block_right_overlay"
            :data-id="1"
            :class="{whyus_section_container_block_right_overlay_show: isRowShow[1]}"
          ></div>
        </div>
      </div>
      <div class="whyus_section_container_footer">
        <div 
          class="whyus_section_container_footer_item"
          v-for="(item, index) in this.$store.state.whyus.footer_list"
          :key="{index}"
        >
        {{ item }}
        </div>
      </div>
      <!-- <div 
        ref="whyus_line" 
        class="whyus_section_container_line"
        :data-id="0"
        :class="{whyus_section_container_line__show: isRowShow[0]}"
      ></div> -->
    </div>
  </section>
  
</template>

<script>


export default {
  name: 'WhyUsSection',
  data(){
    return {
      isRowShow: {},
    }
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(  (entry) => {
        if (entry.isIntersecting) {
          this.isRowShow[entry.target.dataset.id] = entry.isIntersecting
        }
      })
    }
  },
  mounted() {
    let observer = new IntersectionObserver(this.handleIntersection,{
      threshold: [0.5],
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

<style src="./WhyUs.sass" lang="sass"></style>