<template>
    <b-container>

        <b-form-datepicker v-model="datepicker_1"></b-form-datepicker>
        <code>{{datepicker_1}}</code>

        <hr />

        <b-form-datepicker readonly v-model="datepicker_1"></b-form-datepicker>

        <hr />

        <b-form-datepicker disabled v-model="datepicker_1"></b-form-datepicker>

        <hr />

        <b-form-datepicker
                v-model="datepicker_2"
                :min="min"
                :max="max"
        ></b-form-datepicker>
        <code>{{datepicker_2}}</code>

        <hr />

        <b-form-datepicker :date-disabled-fn="dateDisabled"
                           v-model="datepicker_3"
        ></b-form-datepicker>
        <code>{{datepicker_3}}</code>

        <hr />

        <b-form-datepicker :state="true" class="mb-2"></b-form-datepicker>
        <b-form-datepicker :state="false"></b-form-datepicker>

        <hr />

        <b-form-datepicker locale="da" :start-weekday="1" :date-format-options="{year: 'numeric',month: 'numeric',day: 'numeric', }"></b-form-datepicker>

    </b-container>
</template>

<script>


export default {
  name: 'Home',
  computed: {
  },

  data () {
      const now = new Date()

      console.log('getFullYear', now.getFullYear())
      console.log('getMonth', now.getMonth())
      console.log('getDay', now.getDay())

      const datepicker_2_min_date = new Date()
      datepicker_2_min_date.setMonth(now.getMonth() - 2)
      datepicker_2_min_date.setDate(15)

      const datepicker_2_max_date = new Date()
      datepicker_2_max_date.setMonth(now.getMonth() + 2)
      datepicker_2_max_date.setDate(15)

    return {
        datepicker_1: '',
        datepicker_2: '',
        datepicker_3: '',

        min: datepicker_2_min_date,
        max: datepicker_2_max_date,
    }
  },

  methods: {
      dateDisabled(ymd, date) {
          const weekday = date.getDay()
          const day = date.getDate()

          return weekday === 0 || weekday === 6 || day === 13
      }
  }
}
</script>
