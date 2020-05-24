<template>
    <b-container>

        <b-calendar block locale="da-DK" v-model="value" :date-info-fn="date_class"></b-calendar>

        <div class="d-flex" dir="ltr">
            <b-button size="sm" variant="outline-danger" v-if="value" @click="clear_date">
                Clear date
            </b-button>
            <b-button size="sm" variant="outline-primary" @click="set_today">
                Set Today
            </b-button>
        </div>

    </b-container>
</template>

<style>
    .b-calendar-grid-body div.col {
        height: 120px;
    }
</style>

<script>
export default {
  name: 'Home',

  data () {
    return {
        value: null
    }
  },

  methods: {
      clear_date () {
          this.value = null;
      },

      set_today () {
          const now = new Date();
          this.value = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      },

      date_class (ymd, date) {
          const day = date.getDate()
          const month = date.getMonth()

          let class_text = '';
          if (day >= 1 && day <= 10 && month >= 5 && month < 7) {
              class_text = 'table-warning';
          } else if (day > 10 && day <= 20) {
              class_text = 'table-info';
          }

          return class_text;
      }
  }
}
</script>
