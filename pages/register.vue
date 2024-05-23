<template>
  <div>
    <h1>Create an account</h1>
    <hr>
    <form @submit.prevent="signUp">
      <ErrorAlert :error-msg="authError" @clearError="clearError" />
      <div class="mb-2">
        <UInput type="text" placeholder="First name" v-model="name" />
      </div>
      <div class="mb-2">
        <UInput type="text" placeholder="Last name" v-model="lastname" />
      </div>
      <div class="mb-2">
        <UInput type="text" placeholder="Company (optional)" v-model="company" />
      </div>
      <div class="mb-2">
        <UInput type="text" placeholder="Email address" v-model="email" />
      </div>
      <div class="mb-2">
        <UInput type="password" placeholder="Password" v-model="password" />
      </div>
      <div style="display: flex;">
        <div style="flex:1;">
          <UButton
            icon="i-heroicons-arrow-uturn-left"
            size="sm"
            color="white"
            variant="solid"
            to="/login"
          >
            Back to login
          </UButton>
        </div>
        <div style="flex:1; text-align: right;">
          <div style="flex:1;">
            <UButton
              type="submit"
              size="sm"
              color="primary"
              variant="solid"
              :disabled="loading"
              :class="{loading: loading}"
            >
              Register
            </UButton>
          </div>
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
const password = ref('')
const name = ref('')
const lastname = ref('')
const company = ref('')
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const loading = ref(false)
const authError = ref('')

watchEffect(async () => {
  if (user.value) {
    await navigateTo('/')
  }
});

const signUp = async () => {
  if (!name.value) return authError.value = 'First name required';
  if (!lastname.value) return authError.value = 'Last name required';
  loading.value = true
  const { error }  = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        first_name: name.value,
        last_name: lastname.value,
        company: company.value
      }
    }
  })
  if (error) {
    loading.value = false
    authError.value = 'Failed to fetch'
  }
}

const clearError = () => {
  authError.value = ''
}
</script>
