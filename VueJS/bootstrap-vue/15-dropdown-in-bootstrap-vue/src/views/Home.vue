<template>
    <b-container>

        <b-dropdown text="Dropdown button">
            <b-dropdown-item>First item</b-dropdown-item>
            <b-dropdown-item>Second item</b-dropdown-item>
            <b-dropdown-item>Third item</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active item</b-dropdown-item>
            <b-dropdown-item disabled>Disabled item</b-dropdown-item>
        </b-dropdown>

        <hr />

        <b-dropdown class="mr-2">
            <template v-slot:button-content>
                Custom <strong>Content</strong> with <em>HTML</em>
            </template>

            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Dropdown - Left" left class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Dropdown - Right" right class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Dropdown - Dropup" dropup class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Dropdown - Dropright" dropright class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Dropdown - Dropleft" dropleft class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <hr />

        <b-dropdown size="lg" split split-href="#foo/bar" text="Dropdown - split" class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown size="sm" split split-href="#foo/bar" text="Dropdown - split" class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <hr />

        <b-dropdown variant="success" text="Dropdown - success" class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown split-variant="outline-danger" variant="warning" split split-href="#foo/bar" text="Dropdown - split" class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

        <hr />

        <b-dropdown block menu-class="w-100" text="Dropdown" class="mr-2">
            <b-dropdown-item>item</b-dropdown-item>
        </b-dropdown>

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
