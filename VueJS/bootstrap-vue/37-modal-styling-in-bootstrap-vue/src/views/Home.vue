<template>
    <b-container>

      <b-button v-b-modal.modal-xl variant="primary" class="mr-2">Open - modal xl</b-button>
      <b-button v-b-modal.modal-lg variant="primary" class="mr-2">Open - modal lg</b-button>
      <b-button v-b-modal.modal-sm variant="primary" class="mr-2">Open - modal sm</b-button>

      <b-modal id="modal-xl" size="xl" title="Extra Large Modal">Hello world</b-modal>
      <b-modal id="modal-lg" size="lg" title="Large Modal">Hello world</b-modal>
      <b-modal id="modal-sm" size="sm" title="Small Modal">Hello world</b-modal>

      <hr />

      <b-button v-b-modal.modal-tall variant="primary" class="mr-2">Overflowing modal</b-button>
      <b-button v-b-modal.modal-scrollable variant="primary" class="mr-2">Scrolling modal</b-button>

      <b-modal id="modal-tall" title="Overflowing modal">
        <p class="my-4" v-for="i in 20" :key="i">
          Hello world<br />
          This is a overflowing<br />
          sample we need to try out! :)<br />
          One more line to do!
        </p>
      </b-modal>


      <b-modal id="modal-scrollable" scrollable title="Scrollable modal">
        <p class="my-4" v-for="i in 20" :key="i">
          Hello world<br />
          This is a overflowing<br />
          sample we need to try out! :)<br />
          One more line to do!
        </p>
      </b-modal>

      <hr />

      <b-button v-b-modal.modal-center variant="primary">Open - modal center</b-button>
      <b-modal id="modal-center" centered title="Centered modal">
        Hello world, centered
      </b-modal>

      <hr />

      <b-button v-b-modal.modal-custom-styled variant="primary">Show custom styled modal</b-button>
      <b-modal
          id="modal-custom-styled"
          title="Custom styled modal"
          header-bg-variant="primary"
          header-text-variant="danger"
          header-border-variant="warning"
          body-bg-variant="info"
          body-text-variant="light"
          footer-bg-variant="dark"
          footer-text-variant="warning"
          footer-border-variant="primary"
      >
        <b-container fluid>
          Hello world, custom styled
        </b-container>
      </b-modal>

      <hr />

      <b-button v-b-modal.modal-backdrop variant="primary">Open - drop backdrop</b-button>
      <b-modal id="modal-backdrop" title="Drop backdrop modal" hide-backdrop>
        Hello world, drop backdrops
      </b-modal>

      <hr />

      <b-button v-b-modal.modal-disable-stuff variant="primary">Open - disable stuff</b-button>
      <b-modal id="modal-disable-stuff" title="Drop backdrop modal" no-fade no-close-on-backdrop no-close-on-esc>
        Hello world, disabled stuff
      </b-modal>

      <hr />

      <b-button v-b-modal.modal-footer variant="primary">Open - footer</b-button>
      <b-modal id="modal-footer" title="footer modal" no-fade no-close-on-backdrop no-close-on-esc>
        Hello world, custom footer here

        <template v-slot:modal-footer="{ok, cancel}">
          <b-button @click="ok()" variant="success">OK</b-button>
          <b-button @click="cancel()" variant="danger">Cancel</b-button>
        </template>
      </b-modal>

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
  }
}
</script>
