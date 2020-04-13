<template>
  <div class="main">
    <h1 class="title">{{ this.titleMsg }}</h1>

    <p class="start">It's been</p>
    <p class="mid">
      {{ this.days }}
    </p>
    <p class="end">
      {{ this.days > 1 ? "days" : "day" }} since the last time you go out.
    </p>

    <button class="btn btn-outline-light" @click="() => cancel()">
      Cancel
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    days: Number,
    cancel: Function
  },
  computed: {
    titleMsg() {
      if (this.days > 14) {
        return "Congratulation!";
      }

      return "Keep it up!";
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

.start {
}

.mid {
  font-size: 10rem;
  font-weight: bold;
}

.end {
  margin-bottom: 2rem;
}
</style>
