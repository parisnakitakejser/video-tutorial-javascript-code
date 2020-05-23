<template>
    <b-container>

      <b-badge class="mr-1">
        Default badge
      </b-badge>

      <b-badge variant="primary" class="mr-1">
        Primary badge
      </b-badge>

      <b-badge variant="danger" class="mr-1">
        Danger badge
      </b-badge>

      <b-badge variant="success" class="mr-1">
        Success badge
      </b-badge>

      <hr />

      <b-badge pill variant="info" class="mr-1">124</b-badge>
      <b-badge pill variant="dark" class="mr-1">1.245</b-badge>
      <b-badge pill variant="primary" class="mr-1">3</b-badge>

      <hr />

      <b-badge v-for="(val, inx) in skills" :key="inx" class="mr-1" variant="success" style="cursor: pointer;" @click="pop_skill_out(inx)">
        {{val}}
      </b-badge>

    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      skills: ['PHP', 'Python', 'Node', 'VueJS']
    }
  },

  methods: {
    pop_skill_out(pop_out_inx) {
      this.skills.splice(pop_out_inx, 1);
    }
  }
}
</script>
