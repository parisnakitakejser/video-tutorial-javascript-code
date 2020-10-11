<template>
    <b-container>

      <b-list-group>
        <b-list-group-item><a href="#">List group 1</a></b-list-group-item>
        <b-list-group-item active>List group 2</b-list-group-item>
        <b-list-group-item>List group 3</b-list-group-item>
        <b-list-group-item disabled>List group 4</b-list-group-item>
        <b-list-group-item>List group 5</b-list-group-item>
      </b-list-group>

      <hr />

      <b-list-group>
        <b-list-group-item href="#" variant="success">List group 1</b-list-group-item>
        <b-list-group-item variant="warning" button>List group 2</b-list-group-item>
        <b-list-group-item variant="danger">List group 3</b-list-group-item>
      </b-list-group>

      <hr />

      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          List group 1
          <b-badge variant="primary" pill>5</b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          List group 2
          <b-badge variant="primary" pill>8</b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          List group 3
          <b-badge variant="primary" pill>12</b-badge>
        </b-list-group-item>
      </b-list-group>

      <hr />

      <b-list-group horizontal>
        <b-list-group-item>List group 1</b-list-group-item>
        <b-list-group-item>List group 2</b-list-group-item>
        <b-list-group-item>List group 3</b-list-group-item>
      </b-list-group>

      <hr />

      <b-list-group>
        <b-list-group-item href="#" active class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group 1</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            description of our group here!
          </p>

          <small>small text you want here!</small>
        </b-list-group-item>
        <b-list-group-item href="#" disabled class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group 2</h5>
            <small>disabled</small>
          </div>

          <p class="mb-1">
            description of our group here!
          </p>

          <small>small text you want here!</small>
        </b-list-group-item>
        <b-list-group-item href="#" active class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group 3</h5>
            <small>regular list-group-item</small>
          </div>

          <p class="mb-1">
            description of our group here!
          </p>

          <small>small text you want here!</small>
        </b-list-group-item>
      </b-list-group>

      <hr />
      
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
