<template>
    <b-container>

        <b-form-group
            description="Let us know your name"
            label="Enter your name"
        >
            <b-form-input></b-form-input>
        </b-form-group>

        <hr />

        <b-form-group
                description="Let us know your name"
                label="Enter your name"
                id="fieldset"
                label-for="input-2"
                :invalid-feedback="invalidFeedback"
                :valid-feedback="validFeedback"
                :state="state"
        >
            <b-form-input v-model="name" :state="state" trim></b-form-input>
        </b-form-group>

        <hr />

        <b-form-group
                label-cols-sm="4"
                label-cols-lg="3"
                description="Let us know your name"
                label="Enter your name"
                id="fieldset"
                label-for="input-2"
                :invalid-feedback="invalidFeedback"
                :valid-feedback="validFeedback"
                :state="state"
        >
            <b-form-input v-model="name" :state="state" trim></b-form-input>
        </b-form-group>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
      state () {
          return this.name.length >= 4;
      },

      invalidFeedback (){
          if (this.name.length >= 4) {
              return '';
          } else if (this.name.length > 0) {
              return 'Enter at least 4 characters';
          } else {
              return 'Please enter somthing'
          }
      },

      validFeedback() {
          return this.state ? 'Thank you' : ''
      }
  },

  data () {
    return {
        name: ''
    }
  },

  methods: {
  }
}
</script>
