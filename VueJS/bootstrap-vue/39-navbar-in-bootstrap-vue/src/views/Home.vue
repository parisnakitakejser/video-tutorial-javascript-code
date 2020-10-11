<template>
    <b-container>

      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-navbar>

      <hr />

      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" alt="Kitten" />
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-navbar>

      <hr />

      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" alt="Kitten" />
          Hello World
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-navbar>

      <hr />

      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" alt="Kitten" />
          Hello World
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="#">Link 1</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
          <b-nav-item-dropdown text="Dropdown">
            <b-dropdown-item>Drop 1</b-dropdown-item>
            <b-dropdown-item>Drop 2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Drop 3</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>

      <hr />

      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>Brand</b-navbar-brand>

        <b-nav-form>
          <b-form-input class="mr-sm-2" placeholder="Username"></b-form-input>
          <b-form-input class="mr-sm-2" placeholder="Password" type="password"></b-form-input>
          <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">
            Log on
          </b-button>
        </b-nav-form>
      </b-navbar>

      <hr />

      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>Brand</b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>Link 1</b-nav-item>
            <b-nav-item>Link 2</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

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
