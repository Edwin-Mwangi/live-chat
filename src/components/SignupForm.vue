<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>

</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
export default {
    setup(){

      const { error, signup } = useSignup()
      
      const displayName = ref('')
      const password = ref('')
      const email = ref('')

      //chande handlesubmit to async func
      const handleSubmit = async() => {
        await signup(email.value, password.value, displayName.value)
          // console.log( displayName.value, password.value, email.value )
      }
  
      return{ displayName, password, email, handleSubmit, error }
    }

}
</script>

<style>

</style> 