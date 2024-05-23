export default defineNuxtRouteMiddleware((to) => {
  if (to.name !== 'cart') {
    return
  }

  const user = useSupabaseUser()

  if (!user.value) {
    console.debug('unauthenticated, redirect to login')
    return navigateTo('/login')
  }
})
