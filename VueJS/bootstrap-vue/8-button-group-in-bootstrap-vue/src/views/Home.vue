<template>
    <b-container>

      <div>
        <b-button-group>
          <b-button>Button 1</b-button>
          <b-button>Button 2</b-button>
          <b-button>Button 3</b-button>
        </b-button-group>
      </div>

      <hr />

      <div>
        <b-button-group>
          <b-button variant="primary">Button 1</b-button>
          <b-button variant="danger">Button 2</b-button>
          <b-button variant="success">Button 3</b-button>
        </b-button-group>
      </div>

      <hr />

      <b-row>
        <b-col>

          <div>
            <b-button-group size="lg">
              <b-button variant="primary">Button 1</b-button>
              <b-button variant="danger">Button 2</b-button>
              <b-button variant="success">Button 3</b-button>
            </b-button-group>
          </div>

        </b-col>
        <b-col>

          <div>
            <b-button-group size="sm">
              <b-button variant="primary">Button 1</b-button>
              <b-button variant="danger">Button 2</b-button>
              <b-button variant="success">Button 3</b-button>
            </b-button-group>
          </div>

        </b-col>
        <b-col>

          <div>
            <b-button-group vertical>
              <b-button variant="primary">Button 1</b-button>
              <b-button variant="danger">Button 2</b-button>
              <b-button variant="success">Button 3</b-button>
            </b-button-group>
          </div>

        </b-col>
      </b-row>

      <hr />
      <div>
        <b-button-group>
          <b-button>Button 1</b-button>
          <b-dropdown right text="Dropdown Button">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>
          <b-dropdown right split text="Split Button">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
      </div>

    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>
