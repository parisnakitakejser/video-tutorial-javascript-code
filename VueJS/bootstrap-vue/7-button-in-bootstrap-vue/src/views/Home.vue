<template>
    <b-container>

      <b-button class="mr-2">Button</b-button>
      <b-button variant="danger" class="mr-2">Button - Danger</b-button>
      <b-button variant="success" class="mr-2">Button - Success</b-button>
      <b-button variant="link" class="mr-2">Button - Link</b-button>

      <hr />

      <b-button class="mr-2" disabled>Disabled</b-button>
      <b-button variant="danger" @click="hello_world" class="mr-2">Click event - hello_world</b-button>
      <b-button variant="success" href="https://google.com" target="_blank" class="mr-2">Go to google.com</b-button>

      <hr />

      <b-button class="mr-2">Default Button</b-button>
      <b-button size="sm" class="mr-2">Small Button</b-button>
      <b-button size="lg" class="mr-2">Large Button</b-button>

      <hr />

      <b-button variant="outline-primary" class="mr-2">Outline - Primary</b-button>
      <b-button variant="outline-success" class="mr-2">Outline - Success</b-button>
      <b-button variant="outline-danger" class="mr-2">Outline - Danger</b-button>
      <b-button variant="outline-warning" class="mr-2">Outline - Warning</b-button>

      <hr />

      <b-button variant="success" block>Success Block Button</b-button>

      <hr />

      <b-row>
        <b-col>
          <b-button variant="danger" block>Danger Block Button</b-button>
        </b-col>
        <b-col>
          <b-button variant="primary" block>Primary Block Button</b-button>
        </b-col>
      </b-row>

      <hr />

      <b-button pill variant="primary" class="mr-2">Pill - Primary</b-button>
      <b-button pill variant="outline-success" class="mr-2">Pill - Outline - Success</b-button>
      <b-button squared variant="danger" class="mr-2">Squared - Danger</b-button>
      <b-button squared variant="outline-warning" class="mr-2">Squared - Outline - Warning</b-button>


    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
    }
  },

  methods: {
    hello_world() {
      console.log('Hello world - button trigger event working!')
    }
  }
}
</script>
