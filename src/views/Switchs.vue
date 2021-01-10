<template>
  <div class="h-screen w-full items-center flex justify-center">
    <div>
      <t-switch v-model="state" />
      {{ state }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    state: false,
  }),
};
</script>
