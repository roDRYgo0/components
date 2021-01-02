<template>
  <div class="grid grid-cols-1 gap-4 p-10">
    <div class="px-4 py-8 bg-white">
      <!-- Sizes -->
      <div class="mb-8">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Size
          </h2>
        </div>
        <div class="buttons max-w-2xl mx-auto mt-4 flex flex-wrap items-center justify-center">
          <t-button size="xs">
            Extra small
          </t-button>

          <t-button size="sm">
            Small
          </t-button>

          <t-button>
            Medium
          </t-button>

          <t-button size="lg">
            Large
          </t-button>

          <t-button size="xl">
            Extra large
          </t-button>
        </div>
      </div>

      <!-- Color and states -->
      <div class="mb-8">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Color and states
          </h2>
        </div>
        <div class="buttons max-w-3xl mx-auto mt-4 flex flex-wrap items-center justify-center">
          <t-button>
            Primary
          </t-button>

          <t-button light>
            Primary light
          </t-button>

          <t-button color="success">
            Success
          </t-button>

          <t-button
            color="success"
            light
          >
            Success light
          </t-button>

          <t-button color="danger">
            Danger
          </t-button>

          <t-button
            color="danger"
            light
          >
            Danger light
          </t-button>

          <t-button color="warning">
            Warning
          </t-button>

          <t-button
            color="warning"
            light
          >
            Warning light
          </t-button>

          <t-button color="light">
            Light
          </t-button>

          <t-button color="dark">
            Dark
          </t-button>
        </div>

        <div class="buttons max-w-3xl mx-auto mt-4 flex flex-wrap items-center justify-center">
          <t-button>
            Normal
          </t-button>

          <t-button disabled>
            Disabled
          </t-button>

          <t-button is-loading>
            Loading
          </t-button>

          <t-button rounded>
            Rounded
          </t-button>

          <t-button outlined>
            Outlined
          </t-button>

          <t-button
            color="success"
            outlined
          >
            Outlined
          </t-button>

          <t-button
            color="danger"
            outlined
          >
            Outlined
          </t-button>

          <t-button
            color="warning"
            outlined
          >
            Outlined
          </t-button>
        </div>
      </div>

      <!-- Icons -->
      <div class="mb-8">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Icons
          </h2>
        </div>
        <div class="buttons max-w-2xl mx-auto mt-4 flex flex-wrap items-center justify-center">
          <t-button color="danger">
            <template #icon>
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </template>
            Delete
          </t-button>

          <t-button
            color="danger"
            icon-position="right"
          >
            <template #icon>
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </template>
            Delete
          </t-button>

          <t-button color="danger">
            <template #icon>
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </template>
          </t-button>

          <t-button
            color="danger"
            is-loading
          >
            <template #icon>
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </template>
            Delete
          </t-button>

          <t-button
            color="danger"
            icon-position="right"
            is-loading
          >
            <template #icon>
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </template>
            Delete
          </t-button>
        </div>
      </div>

      <!-- Tags -->
      <div class="mb-8">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Tags
          </h2>
        </div>
        <div class="buttons max-w-2xl mx-auto mt-4 flex flex-wrap items-center justify-center">
          <t-button>
            Button
          </t-button>

          <t-button
            tag="a"
            href="https://google.com"
            target="_blank"
          >
            Anchor
          </t-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    coco: 1,
  }),
  methods: {
    showCoco() {
      console.log(this.coco);
    },
  },
};
</script>

<style scoped>
.buttons > * {
  margin-bottom: .75rem;
  margin-right: .75rem;
}
</style>
