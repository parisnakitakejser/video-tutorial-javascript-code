<template>
    <b-container>

        <b-row>
            <b-col md="auto">
                <b-calendar v-model="selected_date" @context="on_context" locale="en-US"></b-calendar>
            </b-col>
            <b-col>
                <p>Value: <code>{{selected_date}}</code></p>
                <p class="mb-0">Context</p>
                <pre class="small">
                    {{context}}
                </pre>
            </b-col>
        </b-row>

        <hr />

        <b-row>
            <b-col>
                <b-calendar></b-calendar>
            </b-col>
            <b-col>
                <b-calendar readonly></b-calendar>
            </b-col>
            <b-col>
                <b-calendar disabled></b-calendar>
            </b-col>
        </b-row>

        <hr />

        <b-row>
            <b-col>
                <b-calendar v-model="selected_date_2" :min="min" :max="max" locale="en"></b-calendar>
            </b-col>
            <b-col>
                <b-calendar :date-disabled-fn="date_disabled"></b-calendar>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const minDate = new Date(today);
minDate.setMonth(minDate.getMonth() - 2)
minDate.setDate(15)

const maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 2)
maxDate.setDate(15)

export default {
  name: 'Home',

  data () {
    return {
        min: minDate,
        max: maxDate,
        selected_date:'',
        selected_date_2: '',
        context: null,
    }
  },

  methods: {
      on_context (ctx) {
          this.context = ctx;
      },

      date_disabled(ymd, date) {
          const weekday = date.getDay()
          const day = date.getDate()

          return weekday === 0 || weekday === 6 || day === 13
      }
  }
}
</script>
