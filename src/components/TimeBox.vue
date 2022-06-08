<template>
  <div class="time-box">
    <span class="time">
      {{ time }}
    </span>
    <span class="date">
      {{ date }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.time-box {
  margin-top: -24px;
}

.time {
  font-family: monospace;
  font-size: 64px;
  font-weight: bold;
  color: var(--text-color);
  opacity: 0.8;

  -webkit-text-stroke: 1px var(--background-color);
}

.date {
  display: block;
  font-family: monospace;
  font-size: 24px;
  font-weight: bold;
  color: var(--text-color);
  opacity: 0.8;

  -webkit-text-stroke: 1px var(--background-color);
}
</style>

<script>
import moment from 'moment'

export default {
  name: 'TimeBox',
  data () {
    return {
      dateTime: new Date(),
    }
  },
  mounted () {
    setInterval(() => {
      this.dateTime = new Date()
    }, 1000)
  },
  computed: {
    time() {
      const format = this.$store.getters.timeOptions.timeFormat
      const blinking = this.$store.getters.timeOptions.blinking

      return moment(this.dateTime).format(
        blinking && this.dateTime.getSeconds() % 2 !== 0 ? 
        format === '24h' ? 'HH:mm' : 'hh:mm A' : 
        format === '24h' ?  'HH mm' : 'hh mm A'
      )
    },
    date() {
      const format = this.$store.getters.timeOptions.dateFormat
      return moment(this.dateTime).format(format)
    }
  }
}
</script>