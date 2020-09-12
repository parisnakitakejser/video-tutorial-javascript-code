<template>
    <b-container>

      <b-img src="https://placekitten.com/g/1024/400" fluid></b-img>

      <hr />

      <b-img src="https://placekitten.com/g/300/150" fluid-grow></b-img>

      <hr />

      <b-container>
        <b-row>
          <b-col>
            <b-img src="https://placekitten.com/g/250/250" fluid-grow thumbnail></b-img>
          </b-col>
          <b-col>
            <b-img src="https://placekitten.com/g/250/250" fluid thumbnail></b-img>
          </b-col>
          <b-col>
            <b-img src="https://placekitten.com/g/250/250" fluid thumbnail></b-img>
          </b-col>
        </b-row>
      </b-container>

      <hr />

      <b-img src="https://placekitten.com/g/150/150" class="mr-2" rounded></b-img>
      <b-img src="https://placekitten.com/g/150/150" class="mr-2" rounded="top"></b-img>
      <b-img src="https://placekitten.com/g/150/150" class="mr-2" rounded="right"></b-img>
      <b-img src="https://placekitten.com/g/150/150" class="mr-2" rounded="bottom"></b-img>
      <b-img src="https://placekitten.com/g/150/150" class="mr-2" rounded="left"></b-img>
      <b-img src="https://placekitten.com/g/150/150" class="mr-2" rounded="circle"></b-img>

      <hr />

      <div>
        <b-img src="https://placekitten.com/g/150/150" left></b-img>
        <b-img src="https://placekitten.com/g/150/150" right></b-img>
      </div>
      <div>
        <b-img src="https://placekitten.com/g/150/150" center></b-img>
      </div>

      <hr />
        <b-img-lazy src="https://placekitten.com/g/1000/300"></b-img-lazy>
      <hr />

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
