<template>
  <div id="app">
    <Counter v-if="started" :days="days" :cancel="cancel" />
    <Starter v-else :startCounter="startCounter" />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Starter from "./components/Starter.vue";

export default {
  name: "App",
  components: {
    Counter,
    Starter
  },
  data() {
    return {
      started: false,
      todayTimestamp: 0,
      startedTimestamp: 0
    };
  },
  computed: {
    days() {
      const difference = this.todayTimestamp - this.startedTimestamp;

      let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
      if (daysDifference <= 0) {
        daysDifference = 0;
      }

      return daysDifference;
    }
  },
  methods: {
    cancel() {
      this.startedTimestamp = 0;
      this.started = false;
    },
    startCounter(timestamp = new Date().getTime()) {
      this.startedTimestamp = timestamp;
      this.started = true;
    }
  },
  mounted() {
    this.todayTimestamp = new Date().getTime();
    console.log("Mounted");
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(315deg, #56ccf2 0, #3a95ee 70%, #2f80ed 100%);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
