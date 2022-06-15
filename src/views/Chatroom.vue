<template>
   <div class="container">
      <NavBar @logout="logout"/>
      <ChatWindow/>
      <NewChatForm/>

   </div>
</template>
 
<script>
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import { watch } from '@vue/runtime-core'
import getUser from '@/composables/getUser'
 export default {
   components: { NavBar, ChatWindow ,NewChatForm },
   setup() {
     const router = useRouter()

     const logout = () =>{
       router.push({ name: 'Welcome' })
     }

     //alternative to using emit events u use watch
    //  const { user } = getUser()
    //  watch(user, () => {
    //         if(!user.value){
    //             router.push({ name: 'Welcome'})
    //         }
    //     })
    return { logout }
   } 
   
 }
</script>

<style>
 
</style>