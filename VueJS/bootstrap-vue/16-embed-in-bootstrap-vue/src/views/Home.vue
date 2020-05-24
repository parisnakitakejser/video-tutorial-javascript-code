<template>
    <b-container>

        Aspect: <code>21by9 (21:9)</code>, <code>16by9 (16:9)</code>, <code>4by3 (4:3)</code>, <code>1by1 (1:1)</code>
        <hr />
        <code>16:9</code>
        <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/IOclm64OyWI"
            allowfullscreen
        ></b-embed>

        <hr />

        <code>4:3</code>
        <b-embed
            type="video" aspect="4by3"
            controls
            poster="https://placekitten.com/1920/1080"
        >
            <source src="dev-stories.webm" type="video/webm">
            <source src="dev-stories.mp4" type="video/mp4">
        </b-embed>

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
