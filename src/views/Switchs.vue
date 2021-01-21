<template>
  <div class="h-screen w-full py-6 px-4 md:px-16">
    <div
      class="w-8/12 flex flex-wrap md:mb-16 mb-4"
      v-for="(item,i) in collection"
      :key="i"
    >
      <div class="w-full mb-6">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          {{ item.name }}
        </h2>
      </div>
      <div
        class="w-1/5 py-4 justify-center flex flex-wrap"
        v-for="(data,index) in item.data"
        :key="index"
      >
        <t-switch
          v-model="data.state"
          :color="data.color"
          :color-passive="data.passiveColor"
          :disabled="data.disabled"
          :light="data.light"
          :light-passive="data.lightPassive"
          :size="data.size"
          :icon-default="data.iconDefault"
        >
          <template
            #iconOn
            v-if="data.icon"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="smile"
              class="h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            ><path
              fill="currentColor"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
            /></svg>
          </template>
          <template
            #iconOff
            v-if="data.icon"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="frown"
              class="h-4 w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            ><path
              fill="currentColor"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"
            /></svg>
          </template>
        </t-switch>
        <p class="capitalize w-full text-center">
          {{ data.title || data.color || data.passiveColor }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    state: false,
    collection: [],
  }),
  beforeMount() {
    // Basics
    this.collection.push({
      name: 'Basics',
      data: [],
    });
    this.collection[0].data.push({
      title: 'default',
      state: false,
    });
    this.collection[0].data.push({
      title: 'false',
      state: false,
    });
    this.collection[0].data.push({
      title: 'true',
      state: true,
    });
    this.collection[0].data.push({
      title: 'disabled false',
      disabled: true,
    });
    this.collection[0].data.push({
      title: 'disabled true',
      state: true,
      disabled: true,
    });
    // Colors
    this.collection.push({
      name: 'Colors',
      data: [],
    });
    this.collection[1].data.push({
      title: 'default',
      state: true,
    });
    this.collection[1].data.push({
      title: 'primary',
      state: true,
    });
    this.collection[1].data.push({
      color: 'secondary',
      passiveColor: 'danger',
      state: true,
    });
    this.collection[1].data.push({
      color: 'success',
      state: true,
    });
    this.collection[1].data.push({
      color: 'danger',
      state: true,
    });
    this.collection[1].data.push({
      color: 'warning',
      state: true,
    });
    // Color Lights
    this.collection.push({
      name: 'Lights Colors',
      data: [],
    });
    this.collection[2].data.push({
      color: 'primary',
      light: true,
      state: true,
    });
    this.collection[2].data.push({
      title: 'primary - disable',
      color: 'primary',
      light: true,
      state: true,
      disabled: true,
    });
    this.collection[2].data.push({
      color: 'secondary',
      light: true,
      state: true,
    });
    this.collection[2].data.push({
      title: 'secondary - disable',
      color: 'secondary',
      light: true,
      state: true,
      disabled: true,
    });
    this.collection[2].data.push({
      color: 'success',
      light: true,
      state: true,
    });
    this.collection[2].data.push({
      title: 'success - disable',
      color: 'success',
      light: true,
      state: true,
      disabled: true,
    });
    this.collection[2].data.push({
      color: 'warning',
      light: true,
      state: true,
    });
    this.collection[2].data.push({
      title: 'warning - disable',
      color: 'warning',
      light: true,
      state: true,
      disabled: true,
    });
    this.collection[2].data.push({
      color: 'danger',
      light: true,
      state: true,
    });
    this.collection[2].data.push({
      title: 'danger - disable',
      color: 'danger',
      light: true,
      state: true,
      disabled: true,
    });
    // Passive
    this.collection.push({
      name: 'Passive Colors',
      data: [],
    });
    this.collection[3].data.push({
      title: 'default',
    });
    this.collection[3].data.push({
      title: 'primary',
      color: 'secondary',
      passiveColor: 'primary',
    });
    this.collection[3].data.push({
      passiveColor: 'secondary',
    });
    this.collection[3].data.push({
      passiveColor: 'success',
    });
    this.collection[3].data.push({
      passiveColor: 'danger',
    });
    this.collection[3].data.push({
      passiveColor: 'warning',
    });
    // Passive Lights
    this.collection.push({
      name: 'Lights Passive',
      data: [],
    });
    this.collection[4].data.push({
      title: 'Default',
      lightPassive: true,
    });
    this.collection[4].data.push({
      passiveColor: 'primary',
      lightPassive: true,
    });
    this.collection[4].data.push({
      passiveColor: 'secondary',
      lightPassive: true,
    });
    this.collection[4].data.push({
      passiveColor: 'success',
      lightPassive: true,
    });
    this.collection[4].data.push({
      passiveColor: 'warning',
      lightPassive: true,
    });
    this.collection[4].data.push({
      passiveColor: 'danger',
      lightPassive: true,
    });
    // Icons
    this.collection.push({
      name: 'With Icon',
      data: [],
    });
    this.collection[5].data.push({
      title: 'Icons default',
      iconDefault: true,
    });
    this.collection[5].data.push({
      title: 'Icons customs',
      color: 'danger',
      icon: true,
    });
    // Sizes
    this.collection.push({
      name: 'Sizes',
      data: [],
    });
    this.collection[6].data.push({
      title: 'Extra Small',
      size: 'xs',
      iconDefault: true,
    });
    this.collection[6].data.push({
      title: 'Small',
      size: 'sm',
      iconDefault: true,
    });
    this.collection[6].data.push({
      title: 'medium',
      size: 'md',
      iconDefault: true,
    });
    this.collection[6].data.push({
      title: 'large',
      size: 'lg',
      iconDefault: true,
    });
    this.collection[6].data.push({
      title: 'Extra large',
      size: 'xl',
      iconDefault: true,
    });
  },
};
</script>
