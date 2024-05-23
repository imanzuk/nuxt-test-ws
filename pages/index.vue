<template>
  <div>
    <div style="display: flex;">
      <div style="flex: 1;">
        <h1>Nuxt.js test app with Supabase</h1>
      </div>
      <div style="flex: 1; text-align: right;">
        <h1 v-if="user?.user_metadata">Hi {{ user.user_metadata.first_name }}</h1>
      </div>
    </div>
    <hr>
    <div>
      <p v-for="i in 5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
</script>

<style scoped>
p {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
