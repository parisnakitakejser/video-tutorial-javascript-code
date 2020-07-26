<template>
    <b-container>

        <b-form-input v-model="input_1" placeholder="Enter your name"></b-form-input>
        <code>{{input_1}}</code>

        <hr />

        <b-row v-for="type in input_2.types" :key="type">
            <b-col sm="3">
                <label :for="`type-{$type}`">Type: <code>{{type}}</code></label>
            </b-col>
            <b-col sm="9">
                <b-form-input :for="`type-{$type}`" :type="type" v-model="input_2.fields[type]"></b-form-input>
                <code>{{input_2.fields[type]}}</code>
            </b-col>
        </b-row>

        <hr />

        <div role="form-group">
            <b-form-input
                    id="input-3"
                    v-model="input_3"
                    :state="input_3_nameState"
                    placeholder="Enter your name"
                    aria-describedby="input-3-valid input-3-invalid"
                    trim
                ></b-form-input>
            <code>{{input_3}}</code>

            <b-form-invalid-feedback id="input-3-invalid">Enter at least 3 letters</b-form-invalid-feedback>
            <b-form-valid-feedback id="input-3-valid">Your full name success</b-form-valid-feedback>
        </div>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
      input_3_nameState() {
        return this.input_3.length > 3;
      }
  },

  data () {
    return {
        input_1: '',
        input_2: {
            fields: {
                text: null,
                number: null,
                email: null,
                password: null,
                search: null,
                url: null,
                tel: null,
                date: null,
                time: null,
                range: null,
                color: null,
            },

            types: [
                'text',
                'number',
                'email',
                'password',
                'search',
                'url',
                'tel',
                'date',
                'time',
                'range',
                'color'
            ]
        },

        input_3: ''
    }
  },

  methods: {
  }
}
</script>
