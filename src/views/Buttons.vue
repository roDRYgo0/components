<template>
  <div class="grid grid-cols-1 gap-4 p-10">
    <div class="px-4 py-8 bg-white">
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.buttons > * {
  margin-bottom: .75rem;
  margin-right: .75rem;
}
</style>
