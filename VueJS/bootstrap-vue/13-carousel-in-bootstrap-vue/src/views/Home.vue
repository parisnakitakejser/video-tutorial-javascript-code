<template>
    <b-container>

        <code>no-animation</code>&nbsp;
        <code>fade</code>

        <hr />

        <b-carousel
            controls
            indicators
            img-width="1024"
            img-height="480"
            :interval="3000"
            v-model="slide"
        >
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10"
                caption="First slide"
                text="Hello World, small text here!"
            ></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11">
                <h1>Hello World!</h1>
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img class="d-block img-fluid w-100" width="1024" height="480" src="https://picsum.photos/2048/960/?image=12" />
                </template>
            </b-carousel-slide>
            <b-carousel-slide caption="Blank image" img-blank style="background: lightskyblue;">
                <p>
                    My custom slide whitout eny image here!
                </p>
            </b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=14"></b-carousel-slide>
        </b-carousel>

    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
        slide: 3
    }
  },

  methods: {
  }
}
</script>
