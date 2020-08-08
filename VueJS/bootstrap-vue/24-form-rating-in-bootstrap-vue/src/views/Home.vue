<template>
    <b-container>

        <b-form-rating v-model="rate_1"></b-form-rating>
        <code>Value: {{rate_1}}</code>

        <hr />

        <b-form-rating v-model="rate_2" readonly></b-form-rating>
        <code>Value: {{rate_2}}</code>

        <hr />

        <b-form-rating v-model="rate_3" stars="10" show-value show-value-max></b-form-rating>
        <code>Value: {{rate_3}}</code>

        <hr />

        <b-form-rating v-model="rate_4" variant="warning" class="mb-2"></b-form-rating>
        <b-form-rating v-model="rate_4" variant="success" class="mb-2"></b-form-rating>
        <b-form-rating v-model="rate_4" color="#FF9900" class="mb-2"></b-form-rating>
        <b-form-rating v-model="rate_4" color="pink" class="mb-2"></b-form-rating>

        <code>Value: {{rate_4}}</code>

        <hr />

        <b-form-rating
          icon-empty="heart"
          icon-half="heart-half"
          icon-full="heart-fill"
          icon-clear="slash-circle"
          show-clear
          variant="danger"
          v-model="rate_2"
        ></b-form-rating>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
      rate_1: null,
      rate_2: 2.567,
      rate_3: null,
      rate_4: null,
    }
  },

  methods: {
  }
}
</script>
