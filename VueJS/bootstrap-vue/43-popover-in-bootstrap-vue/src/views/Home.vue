<template>
    <b-container>
      
      <b-button 
        v-b-popover.hover.top="'My first popover content'"
        title="Popover">
        First popover
      </b-button>

      <hr />

      <b-button id="popover-target-1">
        Hover me - target 1
      </b-button>
      <b-popover 
        target="popover-target-1"
        triggers="hover"
        placement="top"
        >
        <template v-slot:title>Popover Title</template>
        I am popover <b>component</b> content!
      </b-popover>

      <hr />

      <b-button id="popover-target-2" variant="primary">
        Hover me - target 2
      </b-button>
      <b-popover 
        target="popover-target-2"
        triggers="hover"
        placement="top"
        variant="danger"
        >
        <template v-slot:title>Popover Title</template>
        I am popover <b>component</b> content!
      </b-popover>

      <hr />

      <b-button 
        id="popover-button-event" 
        variant="primary"
        >
        I have a popover  
      </b-button>

      <div class="p-2">
        <b-button
          class="px-1 mr-2"
          @click="onOpen"
          >
          Open
        </b-button>

        <b-button
          class="px-1"
          @click="onClose"
          >
          Close
        </b-button>
      </div>

      <b-popover 
        ref="popover" 
        target="popover-button-event" 
        title="Popover"
        >
      Hello <strong>World!</strong>
      </b-popover>


    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
    }
  },

  methods: {
    onOpen() {
      this.$refs.popover.$emit('open');
    },

    onClose() {
      this.$refs.popover.$emit('close');
    }
  }
}
</script>
