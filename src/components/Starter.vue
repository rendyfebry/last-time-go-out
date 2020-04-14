<template>
  <div class="main">
    <h1 class="title">When is the last time you go out?</h1>

    <div>
      <template v-if="!showDatePicker">
        <button class="btn btn-outline-light" @click="handlerStartToday">
          I'm going out today!
        </button>
        <button class="btn btn-outline-light" @click="handlerStartAt">
          I'm going out at...
        </button>
      </template>
      <template v-else>
        <input
          class="form-control date-input"
          type="date"
          v-model="selectedDate"
        />
        <button class="btn btn-outline-light" @click="handleSet">
          Set!
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Starter",
  props: {
    startCounter: Function
  },
  data() {
    return {
      showDatePicker: false,
      selectedDate: "2020-01-01"
    };
  },
  methods: {
    handlerStartToday() {
      this.showDatePicker = false;
      this.startCounter();
    },
    handlerStartAt() {
      this.showDatePicker = true;
    },
    handleSet() {
      const selectedTimestamp = Date.parse(this.selectedDate);

      this.showDatePicker = false;
      this.selectedDate = "";

      this.startCounter(selectedTimestamp);
    }
  }
};
</script>

<style scoped>
.main {
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.btn {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.date-input {
  display: inline-block;
  width: initial;
}
</style>
