<template>
    <b-container>

        <b-checkbox
                v-model="checkbox_1"
                value="accepted"
                unchecked-value="not_accepted"
            >
            I accept the terms and use
        </b-checkbox>
        <code>{{checkbox_1}}</code>

        <hr />

        <b-form-checkbox-group v-model="checkbox_2">
            <b-form-checkbox value="blue">Blue</b-form-checkbox>
            <b-form-checkbox value="pink">Pink</b-form-checkbox>
            <b-form-checkbox value="black">Black</b-form-checkbox>
            <b-form-checkbox value="yellow" disabled>Yellow</b-form-checkbox>
        </b-form-checkbox-group>
        <code>{{checkbox_2}}</code>

        <hr />

        <b-form-checkbox-group
                stacked
                :options="checkbox_3_options"
                v-model="checkbox_3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
        ></b-form-checkbox-group>
        <code>{{checkbox_3}}</code>

        <hr />

        <b-form-checkbox-group
                buttons
                button-variant="danger"
                :options="checkbox_3_options"
                v-model="checkbox_4"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
        ></b-form-checkbox-group>
        <br />
        <code>{{checkbox_4}}</code>

        <hr />

        <b-form-checkbox-group
                stacked
                switches
                :options="checkbox_3_options"
                v-model="checkbox_5"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
        ></b-form-checkbox-group>
        <br />
        <code>{{checkbox_5}}</code>

        <hr />

        <b-form-checkbox-group
                :options="checkbox_3_options"
                v-model="checkbox_6"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
        >
            <b-form-invalid-feedback :state="state">Please select two</b-form-invalid-feedback>
            <b-form-valid-feedback :state="state">Thanks you</b-form-valid-feedback>
        </b-form-checkbox-group>
        <code>{{checkbox_6}}</code>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
    computed: {
        state () {
            return this.checkbox_6.length === 2
        }
    },

  data () {
    return {
        checkbox_1: 'not_accepted',
        checkbox_2: [],
        checkbox_3: [],
        checkbox_4: [],
        checkbox_5: [],
        checkbox_6: [],

        checkbox_3_options: [{
            name: 'Field 1',
            item: 'field-1',
            notEnabled: false
        }, {
            name: 'Field 2',
            item: 'field-2',
            notEnabled: true
        }, {
            name: 'Field 3',
            item: 'field-3',
            notEnabled: false
        }, {
            name: 'Field 4',
            item: {value: 'field-3', 'allowed': true},
            notEnabled: false
        }]
    }
  },

  methods: {
  }
}
</script>
