<template>
    <b-container>

      <b-nav>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <hr />

      <b-nav tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <hr />

      <b-nav pills>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <hr />

      <b-nav vertical>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <hr />

      <b-nav tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item-dropdown text="Dropdown">
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>

      <hr />

      <b-nav pills>
        <b-nav-item>Link 1</b-nav-item>
        <b-nav-item>Link 2</b-nav-item>

        <b-nav-form @submit.stop.prevent="alert('What ever! :)')">
          <b-form-input class="mr-1"></b-form-input>
          <b-button type="submit">Search</b-button>
        </b-nav-form>
      </b-nav>

      <hr />

      <b-card title="Card Title" no-body>
        <b-card-header>
          <b-nav pills>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Inactive</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body>
          <b-card-text>
            My custom text here!
          </b-card-text>
        </b-card-body>
      </b-card>

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
    alert(text) {
      alert(text);
    }
  }
}
</script>
