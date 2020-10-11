<template>
    <b-container>

      <b-overlay :show="show" rounded="sm">
        <b-card title="Card with overlay" :aria-hidden="show ? 'true' : null">
          <b-card-text>Card custom text here!</b-card-text>
          <b-card-text>Click the button to toggle the overlay :)</b-card-text>

          <b-button :disabled="show" variant="primary" @click="show = true">
            Show overlay
          </b-button>
        </b-card>
      </b-overlay>
      <b-button class="mt-3" @click="show = !show">Toggle overlay</b-button>

      <hr />

      <b-row>
        <b-col lg="6">
          <b-overlay show variant="success" :opacity="0.25" blur="0.5rem" rounded="sm">
            <b-card title="Card with overlay" aria-hidden="true">
              <b-card-text>
                My custom overlay content here!
              </b-card-text>
            </b-card>
          </b-overlay>
        </b-col>
        <b-col lg="6">
          <b-overlay show variant="dark" :opacity="0.75" blur="1px" rounded="sm">
            <b-card title="Card with overlay" aria-hidden="true">
              <b-card-text>
                My custom overlay content here!
              </b-card-text>
            </b-card>
          </b-overlay>
        </b-col>
      </b-row>

      <hr />

      <b-row>
        <b-col lg="6">
          <b-overlay show spinner-variant="danger" spinner-type="grow" rounded="sm">
            <b-card title="Card with overlay" aria-hidden="true">
              <b-card-text>
                My custom overlay content here!
              </b-card-text>
            </b-card>
          </b-overlay>
        </b-col>
        <b-col lg="6">
          <b-overlay show spinner-variant="primary" spinner-type="border" spinner-small rounded="sm">
            <b-card title="Card with overlay" aria-hidden="true">
              <b-card-text>
                My custom overlay content here!
              </b-card-text>
            </b-card>
          </b-overlay>
        </b-col>
      </b-row>

      <hr />

      <b-overlay :show="show" rounded="sm">
        <b-card title="custom overlay card" :aria-hidden="show ? 'true' : null">
          <b-card-text>My custom card text with custom spinner options!</b-card-text>

          <b-button :disabled="show" variant="primary" @click="show = true">
            Upload phto
          </b-button>
        </b-card>

        <template v-slot:overlay>
          <div class="text-center">
            <b-icon icon="image" font-scale="3" animation="cylon"></b-icon>
            <p>
              Uploading please wait
            </p>

            <b-button variant="outline-danger" size="sm" @click="show = false">Cancel</b-button>
          </div>
        </template>
      </b-overlay>
    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
  }
}
</script>
