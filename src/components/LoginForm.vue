<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sign Up</button>
  </form>

</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const password = ref('')
        const email = ref('')

        const { login, error } = useLogin()

        const handleSubmit = async() => {
          await login(email.value, password.value)
          if(!error.value){
            console.log('user logged in')
          }
            // console.log( password.value, email.value )
        }

        return{ password, email, handleSubmit }
    }

}
</script>

<style>

</style>