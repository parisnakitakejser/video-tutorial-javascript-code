<template>
    <b-container>

      <b-form-timepicker v-model="timepicker_1" locale="en" class="mb-2"></b-form-timepicker>
      <b-form-timepicker readonly size="lg" v-model="timepicker_1" locale="en" class="mb-2"></b-form-timepicker>
      <b-form-timepicker disabled size="sm" v-model="timepicker_1" locale="en" class="mb-2"></b-form-timepicker>
      <code>Timepicker: {{timepicker_1}}</code>

      <hr />

      <b-form-timepicker v-model="timepicker_2" locale="en" :state="timepicker_2_state" class="mb-2"></b-form-timepicker>
      <code>Timepicker: {{timepicker_2}}</code>

      <hr />

      <b-form-timepicker now-button reset-button locale="en"></b-form-timepicker>

      <hr />

      <b-input-group class="mb-3">
        <b-form-input
          v-model="timepicker_3"
          type="text"
          placeholder="HH:mm:ss"
        ></b-form-input>

        <b-input-group-append>
          <b-form-timepicker
            v-model="timepicker_3"
            button-only
            right
            show-seconds
            locale="en"
          ></b-form-timepicker>
        </b-input-group-append>
      </b-input-group>
      <code>Timepicker: {{timepicker_3}}</code>

      <hr />

      <b-form-timepicker v-bind="labels[locale] || {}" :locale="locale" show-seconds></b-form-timepicker>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    timepicker_2_state () {
      return (this.timepicker_2 !== '')
    }
  },

  data () {
    return {
      timepicker_1: '',
      timepicker_2: '',
      timepicker_3: '',

      labels: {
        'da': {
          labelHours: 'Timer',
          labelMinutes: 'Minutter',
          labelSecounds: 'Sekunder',
          labelIncrement: 'Forøgelse',
          labelDecrement: 'Formindske',
          labelSelected: 'Vælg',
          labelNoTimeSelected: 'igen tid valgt',
          labelCloseButton: 'Luk'
        }
      },

      locale: 'da'
    }
  },

  methods: {

  }
}
</script>
