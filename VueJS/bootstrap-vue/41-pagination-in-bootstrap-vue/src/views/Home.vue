<template>
    <b-container>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage">
      </b-pagination>

      <hr />

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        >
      </b-pagination>

      <hr />

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        class="mt-4"
        >
        <template v-slot:first-text>
          <span class="text-success">First</span>
        </template>
        <template v-slot:prev-text>
          <span class="text-danger">Prev</span>
        </template>
        <template v-slot:next-text>
          <span class="text-warning">Next</span>
        </template>
        <template v-slot:last-text>
          Last
        </template>
      </b-pagination>

      <hr />

      <b-pagination
        pills
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage">
      </b-pagination>

      <hr />

      <b-pagination
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage">
      </b-pagination>

      <hr />

      <b-pagination
        align="right"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage">
      </b-pagination>

      <hr />

      <b-pagination
        align="fill"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage">
      </b-pagination>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
      currentPage: 5,
      rows: 200,
      perPage: 15
    }
  },

  methods: {
  }
}
</script>
