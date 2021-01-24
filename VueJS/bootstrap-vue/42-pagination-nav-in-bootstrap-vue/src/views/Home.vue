<template>
    <b-container>
      
      <b-pagination-nav 
        :link-gen="linkGen" 
        :number-of-pages="10" 
        use-router
      ></b-pagination-nav>

      <hr />

      <b-pagination-nav 
        :link-gen="linkGen2" 
        :number-of-pages="10" 
        use-router
      ></b-pagination-nav>

      <hr />

      <b-pagination-nav 
        :link-gen="linkGen3" 
        :number-of-pages="10" 
        use-router
      ></b-pagination-nav>

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
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },

    linkGen2(pageNum) {
      return `/hello-world/page/${pageNum}`
    },

    linkGen3(pageNum) {
      return {
        path: '/hello-world-2',
        query: {
          page: pageNum
        }
      }
    }
  }
}
</script>
