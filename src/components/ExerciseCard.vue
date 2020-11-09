<template>
  <div id="card" :class="isEditable || isSelected ? 'is-editable' : ''">
    <h5 @click="changeEditableStatus">{{ name.toUpperCase() }}</h5>
    <hr />
    <div id="desc-container" v-if="!isEditable">{{ desc }}</div>
    <div id="card-form" v-else>
      <form @submit.prevent>
        <div class="group-form">
          <input type="number" v-model="numSeries" /><span
            class="highlight"
          ></span
          ><span class="bar"></span>
          <label># Series</label>
        </div>
        <div class="group-form">
          <input type="number" v-model="repsPerSeries" /><span
            class="highlight"
          ></span
          ><span class="bar"></span>
          <label># Reps per Series</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditable: false,
      isSelected: this.isSelectedEx,
      numSeries: this.numSeriesEx,
      repsPerSeries: this.repsPerSeriesEx
    };
  },
  inject: ['updateExercisesToDo'],
  watch: {
    isEditable(newVal, oldVal) {
      const fieldsAreNotEmpy = this.numSeries && this.repsPerSeries;
      if (oldVal && !newVal) {
        if (fieldsAreNotEmpy) {
          this.isSelected = true;
        } else {
          this.isSelected = false;
        }
        this.updateExercisesToDo(
          this.id,
          this.numSeries,
          this.repsPerSeries,
          this.isSelected
        );
      }
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    isSelectedEx: {
      type: Boolean,
      required: true
    },
    numSeriesEx: {
      type: Number,
      required: true
    },
    repsPerSeriesEx: {
      type: Number,
      required: true
    }
  },
  methods: {
    changeEditableStatus() {
      this.isEditable = !this.isEditable;
    }
  }
};
</script>

<style scoped>
#card {
  text-align: justify;
  padding: 12px;
  border-radius: 4px;
  background-color: rgb(240, 248, 255);
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
}

.is-editable {
  background: linear-gradient(to right, #ffefba, #ffffff) !important;
}

h5 {
  font-weight: 900;
  cursor: grab;
}

/* FORM IF EDITABLE */
form {
  width: 100%;
}

.group-form {
  position: relative;
  margin-top: 24px;
}

input {
  font-size: 18px;
  -webkit-appearance: none;
  display: block;
  color: #636363;
  width: 100%;
  background-color: inherit;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #757575;
}

input:focus {
  outline: none;
}

/* Label */

label {
  color: black;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 0.2s ease;
}

/* active */

input:focus ~ label,
input.used ~ label {
  top: -20px;
  transform: scale(0.75);
  left: -2px;
  /* font-size: 14px; */
  color: black;
}

/* Underline */

.bar {
  position: relative;
  display: block;
  width: 100%;
}

.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #4a89dc;
  transition: all 0.2s ease;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

/* active */

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* Highlight */

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active */

input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

/* Animations */

@keyframes inputHighlighter {
  from {
    background: #4a89dc;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
