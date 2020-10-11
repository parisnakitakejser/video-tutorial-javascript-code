<template>
    <b-container>

      <b-jumbotron header="BootstrapVue" lead="content inside our jumotron sample"></b-jumbotron>

      <hr />

      <b-jumbotron>
        <template v-slot:header>BootstrapVue v-slot</template>
        <template v-slot:lead>Content inside our v-slot</template>
      </b-jumbotron>

      <hr />

      <b-jumbotron>
        <template v-slot:header>Custom BootstrapVue with v-slot</template>
        <template v-slot:lead>My custom content here inside a v-slot</template>

        <hr class="mb-4" />

        <p>
          Custom content inside a p-tag
        </p>

        <b-button variant="primary" href="#" class="mr-2">Do something here - primary</b-button>
        <b-button variant="dark" href="#">Do something here - dark</b-button>
      </b-jumbotron>

      <hr />

      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
        <template v-slot:head>custom color jumbotorn</template>
        <template v-slot:lead>content data here</template>
      </b-jumbotron>

      <hr />

      <b-jumbotron bg-variant="dark" text-variant="white" border-variant="danger">
        <template v-slot:head>custom color jumbotorn</template>
        <template v-slot:lead>content data here</template>
      </b-jumbotron>

      <hr />

      <b-jumbotron bg-variant="danger" text-variant="white" border-variant="warning">
        <template v-slot:head>custom color jumbotorn</template>
        <template v-slot:lead>content data here</template>
      </b-jumbotron>

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
