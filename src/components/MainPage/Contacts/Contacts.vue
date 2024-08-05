<template>
  <section class="contacts_section">
    <div class="contacts_section_container">
      <div 
        ref="contacts_section_line" 
        class="contacts_section_container_line"
        :data-id="0"
        :class="{contacts_section_container_line__show: isRowShow[0]}"
      ></div>
      <div 
        class="contacts_section_container_title"
        v-html="this.$store.state.contacts.title"
      ></div>
      <div class="contacts_section_container_block">
        <div 
          ref="contacts_block_left" 
          :data-id="1"
          class="contacts_section_container_block_left"
        >
          <div 
            class="contacts_section_container_block_left_row"
            :style="{ animationDelay: (0.3 * index) + 's' }"
            :class="{contacts_section_container_block_left_row_show: isRowShow[1]}"
            v-for="(item, index) in this.$store.state.contacts.list"
            :key="item.text"
          >
            <div 
              class="contacts_section_container_block_left_row_img"
            >
              <img 
                v-show="item.img != ''"
                :src="item.img" 
              />
            </div>
            <div class="contacts_section_container_block_left_row_text">
              {{item.text}}
            </div>
          </div>
          <div 
            ref="contacts_block_line" 
            class="contacts_section_container_block_left_line"
            :data-id="3"
            :class="{contacts_section_container_block_left_line__show: isRowShow[3]}"
          ></div>
          <div 
            ref="contacts_block_undertext" 
            class="contacts_section_container_block_left_under_text"
            :data-id="4"
            :class="{contacts_section_container_block_left_under_text__show: isRowShow[4]}"
            :style="{ animationDelay: '2s' }"
          >
            {{ this.$store.state.contacts.underText }}
          </div>
          <div 
            ref="contacts_overlay" 
            class="contacts_section_container_block_left_overlay"
            :data-id="2"
            :class="{contacts_section_container_block_left_overlay_show: isRowShow[2]}"
          ></div>
        </div>
        <div 
          ref="contacts_block_right" 
          :data-id="5"
          class="contacts_section_container_block_right"
          :class="{contacts_section_container_block_right__show: isRowShow[5]}"
        >
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af69734620b0dc51574442af80bbe58ac4f018e448b8d9d7a1ff069b2e5407d4d&amp;source=constructor" 
            width="100%" 
            :height="`${this.mobile ? 250 : 500}px`" 
            style="display: block; border-radius: 4px"
            frameborder="0" 
            allowfullscreen="true" 
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>


export default {
  name: 'ContactsSection',
  data(){
    return {
      isRowShow: {},
      mobile: false
    }
  },
  created () {
    screen.width < 460 ? this.mobile = true : this.mobile = false
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
      screen.width < 460 ? this.mobile = true : this.mobile = false
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

<style src="./Contacts.sass" lang="sass"></style>