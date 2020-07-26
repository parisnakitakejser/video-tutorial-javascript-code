<template>
    <b-container>

        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-input
            v-model="test_input"
            type="text"
            placeholder="Test text here thanks! :)"
            class="mb-2"
                />

            <b-button type="submit" class="mr-2" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

        <hr />

        {{test_input}}
    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
        test_input: ''
    }
  },

  methods: {
      onSubmit(evt) {
          evt.preventDefault()
          console.log('My data input:', this.test_input);
      },

      onReset(evt) {
          evt.preventDefault()

          this.test_input = '';
          console.log('Form data reset success!')
      }
  }
}
</script>
