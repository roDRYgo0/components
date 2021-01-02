<template>
  <div class="progress-circular">
    <svg
      class="spinner stroke-current"
      :class="color"
      :width="width"
      :height="heigth"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="circle"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"

        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ProgressCircular',
  props: {
    width: {
      type: Number,
      default: 16,
    },
    heigth: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: 'text-white',
    },
  },
};
</script>
<style lang="scss">
.spinner {
  -webkit-animation: rotation 1.35s linear infinite;
  animation: rotation 1.35s linear infinite;
}

@-webkit-keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

.circle {
  stroke-dasharray: 180;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-animation: turn 1.35s ease-in-out infinite;
  animation: turn 1.35s ease-in-out infinite;
}

@-webkit-keyframes turn {
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
}

@keyframes turn {
  0% {
    stroke-dashoffset: 180;
  }

  50% {
    stroke-dashoffset: 45;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 180;
    -webkit-transform: rotate(450deg);
    transform: rotate(450deg);
  }
}
</style>
