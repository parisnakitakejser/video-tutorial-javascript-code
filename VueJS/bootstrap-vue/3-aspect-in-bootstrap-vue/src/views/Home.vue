<template>
    <b-container>

      <b-button @click="change_aspect('2:1')" class="mr-1">2:1</b-button>
      <b-button @click="change_aspect('4:3')" class="mr-1">4:3</b-button>
      <b-button @click="change_aspect('16:9')" class="mr-1">16:9</b-button>
      <b-button @click="change_aspect('1.85:1')" class="mr-1">1.85:1</b-button>

      <hr />

      <b-aspect :aspect="aspect" style="border: 1px solid black;">
        My aspect: {{aspect}}
      </b-aspect>

      <hr />

      <b-row>
        <b-col>
          <b-aspect :aspect="aspect" style="border: 1px solid black;">
            My aspect: {{aspect}}
          </b-aspect>
        </b-col>
        <b-col>
          <b-aspect :aspect="aspect" style="border: 1px solid black;">
            My aspect: {{aspect}}
          </b-aspect>
        </b-col>
      </b-row>

    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      aspect: '2:1'
    }
  },

  methods: {
    change_aspect (aspect_value) {
      this.aspect = aspect_value;
    }
  }
}
</script>
