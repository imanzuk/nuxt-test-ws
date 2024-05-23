<template>
  <div>
    <h1>New password</h1>
    <hr>
    <form @submit.prevent="updatepassword">
      <ErrorAlert :error-msg="authError" @clearError="clearError" />
      <SuccessAlert :success-msg="authSuccess" @clearSuccess="clearSuccess" />
      <div class="mb-2">
        <UInput type="password" placeholder="Password" v-model="password" />
      </div>
      <div class="mb-2">
        <UInput type="password" placeholder="Repeat password" v-model="passwordConfirm" />
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
            Change password
          </UButton>
        </div>
        <div style="flex:1; text-align: right;">
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth"
})

const password = ref('')
const passwordConfirm = ref('')
const client = useSupabaseAuthClient()
const loading = ref(false)
const authSuccess = ref('')
const authError = ref('')

const updatepassword = async () => {
  if (password.value !== passwordConfirm.value) return authError.value = 'Password mismatch!';
  loading.value = true
  const { error }  = await client.auth.updateUser({
    password: password.value
  })
  await client.auth.signOut()
  if (error) {
    loading.value = false
    authError.value = 'Failed to fetch'
    setTimeout(() => {
      authError.value = ''
    }, 5000)
  }
  else {
    loading.value = false
    authSuccess.value = `Password changed`
    setTimeout(() => {
      authSuccess.value = ''
      navigateTo('/login')
    }, 5000)
  }
}

const clearError = () => {
  authError.value = '';
};

const clearSuccess = () => {
  authSuccess.value = ''
  navigateTo('/login')
};
</script>
