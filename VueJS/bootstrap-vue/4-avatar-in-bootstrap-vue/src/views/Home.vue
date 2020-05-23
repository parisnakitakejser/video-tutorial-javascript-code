<template>
    <b-container>

      <b-avatar src="https://placekitten.com/300/300" class="mr-2"></b-avatar>
      <b-avatar src="https://placekitten.com/310/310" size="24px" class="mr-2"></b-avatar>
      <b-avatar src="https://placekitten.com/320/320" :size="42" class="mr-2"></b-avatar>
      <b-avatar src="https://placekitten.com/330/330" size="6rem" class="mr-2"></b-avatar>

      <hr />

      <b-avatar icon="star-fill" size="3rem" class="mr-2"></b-avatar>
      <b-avatar size="3rem" class="mr-2">PNK</b-avatar>

      <hr />

      <b-avatar variant="secondary" class="mr-2"></b-avatar>
      <b-avatar variant="primary" class="mr-2"></b-avatar>
      <b-avatar variant="dark" class="mr-2"></b-avatar>
      <b-avatar variant="light" class="mr-2"></b-avatar>
      <b-avatar variant="success" class="mr-2"></b-avatar>
      <b-avatar variant="danger" class="mr-2"></b-avatar>
      <b-avatar variant="warning" class="mr-2"></b-avatar>
      <b-avatar variant="info" class="mr-2"></b-avatar>

      <hr />

      <b-avatar variant="secondary" square class="mr-2"></b-avatar>
      <b-avatar variant="primary" rounded class="mr-2"></b-avatar>
      <b-avatar variant="dark" rounded="sm" class="mr-2"></b-avatar>
      <b-avatar variant="dark" rounded="lg" class="mr-2"></b-avatar>
      <b-avatar variant="success" rounded="top" class="mr-2"></b-avatar>
      <b-avatar variant="danger" rounded="left"></b-avatar>
      <b-avatar variant="warning" rounded="right" class="mr-2"></b-avatar>
      <b-avatar variant="info" rounded="bottom" class="mr-2"></b-avatar>

      <hr />

      <div>
        <b-avatar variant="primary" text="PNK" class="align-baseline"></b-avatar>
        Paris Nakita Kejser
      </div>

      <hr />

      <div>
        <b-avatar badge class="mr-2"></b-avatar>
        <b-avatar badge badge-left class="mr-2"></b-avatar>
        <b-avatar badge badge-top class="mr-2"></b-avatar>
        <b-avatar badge badge-left badge-top class="mr-2"></b-avatar>
      </div>

      <hr />

      <div>
        <b-avatar badge class="mr-2">
          <template v-slot:badge>
            4
          </template>
        </b-avatar>

        <b-avatar badge class="mr-2">
          <template v-slot:badge>
            PNK
          </template>
        </b-avatar>
      </div>
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
