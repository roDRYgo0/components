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
          :passive-color="data.passiveColor"
          :disabled="data.disabled"
        />
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
    // Color Passive
    this.collection.push({
      name: 'Passive Colors',
      data: [],
    });
    this.collection[2].data.push({
      title: 'default',
    });
    this.collection[2].data.push({
      passiveColor: 'primary',
    });
    this.collection[2].data.push({
      passiveColor: 'secondary',
    });
    this.collection[2].data.push({
      passiveColor: 'success',
    });
    this.collection[2].data.push({
      passiveColor: 'danger',
    });
    this.collection[2].data.push({
      passiveColor: 'warning',
    });
  },
};
</script>
