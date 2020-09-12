<template>
    <b-container>

      <b-input-group size="lg" prepend="DKK" append=",00">
        <b-form-input></b-form-input>
      </b-input-group>

      <hr />

      <b-input-group>
        <template v-slot:prepend>
          <b-input-group-text>
            Username
          </b-input-group-text>
        </template>

        <b-form-input></b-form-input>

        <template v-slot:append>
          <b-input-group-text>
            <strong class="text-danger">!</strong>
          </b-input-group-text>
        </template>
      </b-input-group>

      <hr />

      <b-input-group prepend="Username">
        <b-form-input></b-form-input>

        <b-input-group-append>
          <b-button variant="outline-success">Button</b-button>
          <b-button variant="info">Button</b-button>
        </b-input-group-append>
      </b-input-group>

      <hr />

      <b-input-group prepend="Username">
        <b-form-input></b-form-input>

        <b-input-group-append>
          <b-dropdown text="Dropdown" variant="success">
            <b-dropdown-item>Action A</b-dropdown-item>
            <b-dropdown-item>Action B</b-dropdown-item>
          </b-dropdown>

        </b-input-group-append>
      </b-input-group>

      <hr />

      <b-input-group>
        <b-input-group-prepend is-text>
          <b-form-checkbox switch class="mr-n2" v-model="switch_value">
            <span class="sr-only">Switch following text input</span>
          </b-form-checkbox>
        </b-input-group-prepend>

        <b-form-input :disabled="!switch_value"></b-form-input>
      </b-input-group>
    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
      switch_value: false
    }
  },

  methods: {
  }
}
</script>
