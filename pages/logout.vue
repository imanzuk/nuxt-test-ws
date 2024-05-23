<template>
  <div>
    <p>You have been logged out.</p>
    <hr>
    <p>You will be redirected to the home page in 3 seconds.</p>
  </div>
</template>

<script setup>
const client = useSupabaseAuthClient()
const { error } = await client.auth.signOut()

if (error) {
  console.error('Something went wrong !')
} else {
  console.debug('logged out')
  setTimeout(async () => { await navigateTo('/') }, 3000)
}
</script>
