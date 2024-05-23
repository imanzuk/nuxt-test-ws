<template>
  <div>
    <h1>Sign in</h1>
    <hr>
    <form @submit.prevent="login">
      <ErrorAlert :error-msg="authError" @clearError="clearError" />
      <div class="mb-2">
        <UInput type="text" placeholder="Email address" v-model="email" />
      </div>
      <div class="mb-2">
        <UInput type="password" placeholder="Password" v-model="password" />
      </div>
      <div style="display: flex;">
        <div style="flex:1;">
          <UButton
            type="submit"
            size="sm"
            color="primary"
            variant="solid"
            :disabled="loading"
            :class="{loading: loading}"
          >
            Sign in
          </UButton>
        </div>
        <div style="flex:1; text-align: right;">
          <NuxtLink to="/forgot-password">Forgot your password?</NuxtLink>
        </div>
      </div>
    </form>
    <hr>
    <div>
      <UButton
        size="sm"
        color="white"
        variant="solid"
        to="/register"
      >
        Create new account
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth"
})

const user = useSupabaseUser()
const loading = ref(false)
const authError = ref('')
const email = ref('')
const password = ref('')
const client = useSupabaseAuthClient()

watchEffect(async () => {
  if (user.value) {
    await navigateTo('/shop')
  }
});

const login = async () => {
  loading.value = true
  const { error }  = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    loading.value = false
    authError.value = 'Invalid login credentials'
    setTimeout(() => {
      authError.value = ''
    }, 5000)
  }
}

const clearError = () => {
  authError.value = '';
};
</script>
