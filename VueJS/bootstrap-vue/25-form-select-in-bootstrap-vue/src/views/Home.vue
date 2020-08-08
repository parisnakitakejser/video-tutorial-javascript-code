<template>
    <b-container>

      <b-form-select v-model="select_1" :options="options_1"></b-form-select>
      <code>Value: {{select_1}}</code>

      <hr />

      <b-form-select v-model="select_2" :options="options_2"></b-form-select>
      <code>Value: {{select_2}}</code>

      <hr />

      <b-form-select v-model="select_3">
        <b-form-select-option :value="null">Option 1 - not selected</b-form-select-option>
        <b-form-select-option value="a">Option 2</b-form-select-option>
        <b-form-select-option value="b" disabled>Option 3</b-form-select-option>

        <b-form-select-option-group label="Grouped options">
          <b-form-select-option :value="{C: 'option4'}">Option 4</b-form-select-option>
          <b-form-select-option :value="{D: 'option5'}">Option 5</b-form-select-option>
        </b-form-select-option-group>
      </b-form-select>
      <code>Value: {{select_3}}</code>

      <hr />

      <b-form-select v-model="select_4" :options="options_4">
        <template v-slot:first>
          <b-form-select-option :value="null">-- Please select an option --</b-form-select-option>
        </template>

        <b-form-select-option value="C">Option 3</b-form-select-option>
        <b-form-select-option value="D">Option 4</b-form-select-option>
      </b-form-select>
      <code>Value: {{select_4}}</code>

      <hr />

      <b-form-select
          v-model="select_5"
          :options="options_5"
          value-field="item"
          text-field="title"
          disabled-field="notActive"
      ></b-form-select>
      <code>Value: {{select_5}}</code>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
      select_1: null,
      select_2: null,
      select_3: null,
      select_4: null,
      select_5: null,

      options_1: [
        {value: null, text: 'Option 1 - not selected yet'},
        {value: 'a', text: 'Option 2'},
        {value: 'b', text: 'Option 3'},
        {value: {C:'option 4'}, text: 'Option 4 - with array'},
        {value: 'd', text: 'Option 5 - is disabled', disabled: true},
      ],

      options_2: [
        {value: null, text: 'Option 1 - not selected yet'},
        {value: 'a', text: 'Option 2'},
        {value: 'b', text: 'Option 3'}, {
            label: 'Grouped options',
            options: [
              {value: {C: 'option 4'}, text: 'Option 4 - with array'},
              {value: 'd', text: 'Option 5 - is disabled', disabled: true},
          ]
        }
      ],

      options_4: [
        {value: 'a', text: 'Option 1'},
        {value: 'b', text: 'Option 2'},
      ],

      options_5: [
        {item: 'a', title: 'Option 1 - not selected yet'},
        {item: 'b', title: 'Option 2'},
        {item: 'c', title: 'Option 3'},
        {item: 'd', title: 'Option 4', notActive: true},
        {item: {E: 1}, title: 'Option 5'},
      ]
    }
  },

  methods: {
  }
}
</script>
