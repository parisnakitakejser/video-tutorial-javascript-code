<template>
    <b-container>

        <b-button-toolbar>
            <b-button-group>
                <b-button>&laquo;</b-button>
                <b-button>&lsaquo;</b-button>
            </b-button-group>
            <b-button-group class="ml-2 mr-2">
                <b-button>1</b-button>
                <b-button>2</b-button>
                <b-button>3</b-button>
            </b-button-group>
            <b-button-group>
                <b-button>&rsaquo;</b-button>
                <b-button>&raquo;</b-button>
            </b-button-group>
        </b-button-toolbar>

        <hr />

        <b-button-toolbar>
            <b-input-group size="sm">
                <b-form-input value="100" class="text-right"></b-form-input>
            </b-input-group>
            <b-button-group size="sm" class="ml-2">
                <b-button variant="success">Save</b-button>
                <b-button variant="danger">Cancel</b-button>
            </b-button-group>
        </b-button-toolbar>

        <hr />

        <b-button-toolbar>
            <b-button-group>
                <b-button>New</b-button>
                <b-button>Edit</b-button>
                <b-button>Undo</b-button>
            </b-button-group>

            <b-dropdown class="mx-1" right text="Menu">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-item>Item 3</b-dropdown-item>
            </b-dropdown>

            <b-button-group>
                <b-button>Save</b-button>
                <b-button>Cancel</b-button>
            </b-button-group>
        </b-button-toolbar>
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
