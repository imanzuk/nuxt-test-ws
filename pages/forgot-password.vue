<template>
  <div>
    <h1>Forgot password</h1>
    <hr>
    <form @submit.prevent="resetPassword">
      <ErrorAlert :error-msg="authError" @clearError="clearError" />
      <SuccessAlert :success-msg="authSuccess" @clearSuccess="clearSuccess" />
      <div class="mb-2">
        <UInput type="text" placeholder="Email address" v-model="email" />
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
            Request new password
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

const email = ref('')
const client = useSupabaseAuthClient()
const loading = ref(false)
const authSuccess = ref('')
const authError = ref('')

const resetPassword = async () => {
  loading.value = true
  const { error }  = await client.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${window.location.origin}/new-password`
  })
  if (error) {
    loading.value = false
    authError.value = 'Invalid email credential'
    setTimeout(() => {
      authError.value = ''
    }, 5000)
  }
  else {
    loading.value = false
    authSuccess.value = `We've sent your an email.`
    setTimeout(() => {
      authSuccess.value = ''
    }, 5000)
  }
}

const clearError = () => {
  authError.value = '';
};

const clearSuccess = () => {
  authSuccess.value = '';
};
</script>
