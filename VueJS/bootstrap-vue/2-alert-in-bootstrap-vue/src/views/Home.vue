<template>
    <b-container>
      <b-alert show>
        Default alert showing up here!
      </b-alert>

      <hr />

      <b-alert show variant="danger">
        Danger alert showing up here!
      </b-alert>

      <hr />

      <b-alert show variant="warning">
        Warning alert showing up here!
      </b-alert>

      <hr />

      <b-alert :show="success_show" variant="success">
        Success alert showing up here whitout fade!
      </b-alert>

      <b-alert :show="success_show" fade variant="success">
        Success alert showing up here with fade!
      </b-alert>

      <span @click="toggle_success_alert" style="cursor: pointer;">Toggle success alert</span>
      <hr />

      <b-alert show variant="danger" dismissible>Danger alert with dismissible</b-alert>

      <b-alert show variant="danger" @dismissed="dismissed_callback" dismissible>Danger alert with dismissible with callback</b-alert>
      <hr />

    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      success_show: false
    }
  },

  methods: {
    toggle_success_alert() {
      this.success_show = !this.success_show;
    },

    dismissed_callback () {
      console.log('Thanks for triggering the dismissed callback!')
    }
  }
}
</script>
