<template>
    <b-container>

      <b-form-group>
        <b-form-radio v-model="radio_selected_1" value="A">Option A</b-form-radio>
        <b-form-radio v-model="radio_selected_1" value="B">Option B</b-form-radio>
      </b-form-group>

      <code>{{radio_selected_1}}</code>

      <hr />

      <b-form-group>
        <b-form-radio v-model="radio_selected_2" value="A">Option A</b-form-radio>
        <b-form-radio v-model="radio_selected_2" value="B">Option B</b-form-radio>
        <b-form-radio v-model="radio_selected_2" value="C" disabled>Option C</b-form-radio>
        <b-form-radio v-model="radio_selected_2" :value="{D: 'my option val here'}">Option D</b-form-radio>
      </b-form-group>

      <code>{{radio_selected_2}}</code>

      <hr />

      <b-form-group>
        <b-form-radio-group stacked buttons v-model="radio_selected_3">
          <b-form-radio value="A">Option A</b-form-radio>
          <b-form-radio value="B">Option B</b-form-radio>
          <b-form-radio value="C" disabled>Option C</b-form-radio>
          <b-form-radio :value="{D: 'my option val here'}">Option D</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <code>{{radio_selected_3}}</code>

      <hr />

      <b-form-group>
        <b-form-radio-group button-variant="outline-primary" buttons v-model="radio_selected_4">
          <b-form-radio value="A">Option A</b-form-radio>
          <b-form-radio value="B">Option B</b-form-radio>
          <b-form-radio value="C" disabled>Option C</b-form-radio>
          <b-form-radio :value="{D: 'my option val here'}">Option D</b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <code>{{radio_selected_4}}</code>

      <hr />

      <b-form-group>
        <b-form-radio-group :state="state" button-variant="outline-primary" buttons v-model="radio_selected_5">
          <b-form-radio value="A">Option A</b-form-radio>
          <b-form-radio value="B">Option B</b-form-radio>
          <b-form-radio value="C" disabled>Option C</b-form-radio>
          <b-form-radio :value="{D: 'my option val here'}">Option D</b-form-radio>
        </b-form-radio-group>

        <b-form-invalid-feedback :state="state">Please select one</b-form-invalid-feedback>
        <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>

      </b-form-group>

      <code>{{radio_selected_5}}</code>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    state () {
      return Boolean(this.radio_selected_5)
    }
  },

  data () {
    return {
      radio_selected_1: null,
      radio_selected_2: null,
      radio_selected_3: null,
      radio_selected_4: 'B',
      radio_selected_5: null,
    }
  },

  methods: {
  }
}
</script>
