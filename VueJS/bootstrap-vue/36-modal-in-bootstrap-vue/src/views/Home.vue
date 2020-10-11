<template>
    <b-container>

      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="Bootstrap Vue - Modal">
        <p>
          Hello world! :)
        </p>
      </b-modal>

      <hr />

      <b-button @click="$bvModal.show('bv-modal-sample')">Open Modal with $bvModal</b-button>

      <b-modal id="bv-modal-sample" hide-footer>
        <template v-slot:modal-title>
          Using <code>$bvModal</code> method
        </template>

        <div class="d-block text-center">
          Hello world, its coming from $bvModal method
        </div>

        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-sample')">
          Close me :(
        </b-button>
      </b-modal>

      <hr />

      <b-button @click="showModal3" class="mr-2">Open modal - $refs</b-button>
      <b-button @click="toggleModal3" class="mr-2">Toggle modal - $refs</b-button>

      <b-modal ref="modal-3" hide-footer title="Using $refs to be open">
        <div class="d-block text-center">
          <h3>Hello world, triggered by $refs</h3>
        </div>

        <b-button @click="hideModal3" block variant="outline-danger">Close me</b-button>
        <b-button @click="toggleModal3" block variant="outline-warning">Toggle me</b-button>
      </b-modal>

      <hr />

      <b-button @click="modal4Show = !modal4Show">
        Open modal 4 - using variable
      </b-button>
      <b-modal v-model="modal4Show">Hello world, from modal4</b-modal>

      <hr />

      <b-button v-b-modal.modal-prevent-closing>
        Open Modal - prevent closing
      </b-button>
      <div>
        Submitted name: <code>{{modal5_input}}</code>
      </div>
      <b-modal
          id="modal-prevent-closing"
          ref="modal-5"
          title="Submit your name"
          @show="modal5Reset"
          @hide="modal5Reset"
          @ok="modal5HandleOk"
      >
        <form ref="modal-5-form" @submit.stop.prevent="modal5HandleSubmit">
          <b-form-group
              :state="modal5_name_state"
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
          >
            <b-form-input
                id="name-input"
                v-model="modal5_name_input"
                :state="modal5_name_state"
                required
            ></b-form-input>
          </b-form-group>
        </form>
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
      modal4Show: false,

      modal5_input: '',
      modal5_name_input: '',
      modal5_name_state: null
    }
  },

  methods: {
    showModal3 () {
      this.$refs['modal-3'].show();
    },

    hideModal3 () {
      this.$refs['modal-3'].hide();
    },

    toggleModal3 () {
      this.$refs['modal-3'].toggle();
    },

    modal5Reset () {
      this.modal5_name_input = '';
      this.modal5_name_state = null;
    },

    modal5HandleOk (bvModalEvt) {
      bvModalEvt.preventDefault()
      this.modal5HandleSubmit()
    },

    modal5CheckFormValidation () {
      const valid = this.$refs['modal-5-form'].checkValidity()
      this.modal5_name_state = valid
      return valid
    },

    modal5HandleSubmit () {
      if(!this.modal5CheckFormValidation()) {
        return
      }

      this.modal5_input = this.modal5_name_input
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>
