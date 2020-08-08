<template>
    <b-container>
      <b-form-spinbutton v-model="spin_value_1" min="1" max="100"></b-form-spinbutton>
      <code>Value: {{spin_value_1}}</code>

      <hr />

      <b-form-spinbutton v-model="spin_value_2" min="0" max="10" step="0.1"></b-form-spinbutton>
      <code>Value: {{spin_value_2}}</code>

      <hr />

      <b-form-spinbutton v-model="spin_value_3" min="0" max="10" wrap></b-form-spinbutton>
      <code>Value: {{spin_value_3}}</code>

      <hr />

      <b-form-spinbutton v-model="spin_value_4" min="0" max="10" inline></b-form-spinbutton><br />
      <code>Value: {{spin_value_4}}</code>

      <hr />

      <b-form-spinbutton v-model="spin_value_5" min="0" max="10" vertical></b-form-spinbutton><br />
      <code>Value: {{spin_value_5}}</code>

      <hr />
      <b-form-spinbutton v-model="spin_value_6" min="0" max="6" wrap :formatter-fn="dayFormater"></b-form-spinbutton><br />
      <code>Value: {{spin_value_6}}</code>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
      spin_value_1: 50,
      spin_value_2: 1.5,
      spin_value_3: 1,
      spin_value_4: 3,
      spin_value_5: 2,
      spin_value_6: 0,

      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  },

  methods: {
    dayFormater(value) {
      return this.days[value];
    }
  }
}
</script>
