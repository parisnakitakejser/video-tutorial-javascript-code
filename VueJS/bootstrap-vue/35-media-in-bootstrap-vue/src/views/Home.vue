<template>
    <b-container>

      <b-media>
        <template v-slot:aside>
          <b-img blank blank-color="#ccc" width="64" alt="My placeholder"></b-img>
        </template>

        <h2>Media body</h2>
        <p>Some text here!</p>
      </b-media>

      <hr />

      <b-media no-body>
        <b-media-aside>
          <b-img blank blank-color="#ccc" width="64" height="128" alt="My placeholder"></b-img>
        </b-media-aside>

        <b-media-body class="ml-3">
          <h5>Media title</h5>
          <p>
            content here! :)
          </p>

          <b-media>
            <b-media-aside>
              <b-img blank blank-color="#ebc" width="64" alt="My placeholder"></b-img>
            </b-media-aside>

            <b-media-body class="ml-3">
              <h5>sub media title</h5>
              <small>
                content here! :)
              </small>
            </b-media-body>
          </b-media>
        </b-media-body>
      </b-media>

      <hr />

      <ul class="list-unstyled">
        <b-media tag="li">
          <template v-slot:aside>
            <b-img blank blank-color="#abc" width="64" alt="My placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            area 1
          </p>
        </b-media>

        <b-media tag="li" class="my-4">
          <template v-slot:aside>
            <b-img blank blank-color="#cba" width="64" alt="My placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            area 2
          </p>
        </b-media>

        <b-media tag="li" class="my-4">
          <template v-slot:aside>
            <b-img blank blank-color="#bac" width="64" alt="My placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            area 3
          </p>
        </b-media>
      </ul>
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
