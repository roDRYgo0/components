<template>
  <div class="grid grid-cols-1 gap-4 p-10">
    <div class="px-4 py-8 bg-white">
      <!-- Types and states -->
      <div class="mb-8">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Types and states
          </h2>
        </div>
        <div class="buttons max-w-2xl mx-auto mt-4 flex flex-wrap items-start justify-center">
          <t-input
            v-model="email"
            vid="email"
            label="Email"
            placeholder="you@example.com"
            optional
          />

          <t-input
            v-model="email"
            vid="email2"
            label="Email"
            placeholder="you@example.com"
            description="The email must be unique"
          />

          <t-input
            v-model="email"
            vid="email3"
            label="Email"
            placeholder="you@example.com"
            error="The email has already been taken"
          />

          <t-input
            v-model="email"
            vid="email4"
            label="Email"
            placeholder="you@example.com"
            disabled
          />

          <t-input
            v-model="email"
            vid="email5"
            label="Email"
            placeholder="you@example.com"
            is-loading
          />

          <t-input
            v-model="email"
            vid="email6"
            label="Email"
            placeholder="you@example.com"
            rounded
          />

          <t-input
            v-model="email"
            vid="password"
            label="Password"
            placeholder="Regular password"
            type="password"
          />

          <t-input
            v-model="email"
            vid="password2"
            label="Password"
            placeholder="Password reveal"
            type="password"
            password-reveal
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: 'admin@gmail.com',
  }),
};
</script>

<style scoped>
.buttons > * {
  margin-bottom: 1.75rem;
  margin-right: .75rem;
}
</style>
