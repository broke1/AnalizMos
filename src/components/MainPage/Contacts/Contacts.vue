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
            v-for="(item, index) in list"
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
            ref="contacts_overlay" 
            class="contacts_section_container_block_left_overlay"
            :data-id="2"
            :class="{contacts_section_container_block_left_overlay_show: isRowShow[2]}"
          ></div>
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
      list: this.$store.state.contacts.list
    }
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(  (entry) => {
        if (entry.isIntersecting) {
          console.log("wrer")
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

<style src="./Contacts.sass" lang="sass"></style>