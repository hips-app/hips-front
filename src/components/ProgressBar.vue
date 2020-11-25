<template>
  <div id="progress__container" class="progress">
    <div
      id="progress__bar"
      :class="[
        bootstrapColor,
        'progress-bar',
        'progress-bar-striped',
        'progress-bar-animated'
      ]"
      :style="progressStyle"
      role="progressbar"
      aria-valuenow="10"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {{ dataProp }} / {{ progress }} %
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataProp: {
      type: String,
      required: false,
      default: ''
    },
    progress: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      bootstrapColor: '',
      width: 0
    };
  },
  computed: {
    progressStyle() {
      return { width: `${this.width}%` };
    }
  },
  mounted() {
    if (this.progress === 100) this.bootstrapColor = 'bg-success';
    else if (this.progress >= 80) this.bootstrapColor = 'bg-primary';
    else if (this.progress >= 60) this.bootstrapColor = 'bg-warning';
    else if (this.progress >= 40) this.bootstrapColor = 'bg-danger';
    else this.bootstrapColor = 'bg-dark';
    setTimeout(() => {
      this.width = this.progress;
    }, 0);
  }
};
</script>
<style scoped>
#jj {
  line-height: 0;
}

#progress__container {
  background-color: white;
  height: 2rem;
  font-size: 0.8rem;
  margin: 10px 0;
  border-radius: 15px;
}

#progress__bar {
  text-align: left;
  padding-left: 2%;
  border-radius: 15px;
  transition: all 2s;
}
</style>
