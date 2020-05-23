<template>
    <b-container>

      <b-breadcrumb>
        <b-breadcrumb-item href="#Home">Home</b-breadcrumb-item>
        <b-breadcrumb-item href="#Blog">Blog</b-breadcrumb-item>
        <b-breadcrumb-item active>Hello World!</b-breadcrumb-item>
      </b-breadcrumb>

      <hr />

      <b-breadcrumb :items="breadcrumb_items"></b-breadcrumb>

      <hr />

      <b-breadcrumb>
        <b-breadcrumb-item v-for="(val, inx) in breadcrumb_custom_items" :href="val.href" :active="val.active" :key="inx">
          <span style="color: pink;" v-if="val.text === 'Blog'">
            {{val.text}}
          </span>
          <template v-else>
            {{val.text}}
          </template>
        </b-breadcrumb-item>
      </b-breadcrumb>

    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      breadcrumb_items: [{
        text: 'Home',
        href: '#Home'
      },{
        text: 'Blog',
        href: '#Blog'
      },{
        text: 'Hello World! - Its dynamic items list post here',
        active: true
      }],

      breadcrumb_custom_items: [{
        text: 'Home',
        href: '#Home'
      },{
        text: 'Blog',
        href: '#Blog'
      },{
        text: 'Hello World! - Custom items',
        active: true
      }]
    }
  },

  methods: {
  }
}
</script>
