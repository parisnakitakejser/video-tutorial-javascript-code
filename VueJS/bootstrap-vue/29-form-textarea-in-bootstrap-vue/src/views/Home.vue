<template>
    <b-container>

      <b-form-textarea v-model="text_1" rows="3" max-rows="6"></b-form-textarea>
      <code>Textarea: {{text_1}}</code>

      <hr />

      <b-form-textarea v-model="text_2" size="sm" rows="3" max-rows="6"></b-form-textarea>
      <b-form-textarea v-model="text_2" size="md" rows="3" max-rows="6"></b-form-textarea>
      <b-form-textarea v-model="text_2" size="lg" rows="3" max-rows="6"></b-form-textarea>
      <code>Textarea: {{text_2}}</code>

      <hr />

      <b-form-textarea v-model="text_3" rows="3" max-rows="6" :state="text_3.length >= 10"></b-form-textarea>
      <code>Textarea: {{text_3}}</code>

      <hr />

      <b-form-textarea v-model="text_4" :formatter="formatter" rows="3" max-rows="6"></b-form-textarea>
      <code>Textarea: {{text_4}}</code>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
      text_1: '',
      text_2: '',
      text_3: '',
      text_4: 'A B C D E F G',
    }
  },

  methods: {
    formatter(value) {
      return value.toLowerCase();
    }
  }
}
</script>
