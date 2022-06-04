<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sign Up</button>
  </form>

</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const displayName = ref('')
        const password = ref('')
        const email = ref('')

        const handleSubmit = () => {
            console.log( displayName.value, password.value, email.value )
        }

        return{ displayName, password, email, handleSubmit }
    }

}
</script>

<style>

</style>