<template>
    <form>
        <textarea
        placeholder="type message..."
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
        ></textarea>
    </form>
</template>
 
<script>
import { timestamp } from '@/firebase/config'
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import { ref } from '@vue/reactivity'
 export default {
     setup(){
         const { user } = getUser() 
         const{ addDoc, error } = useCollection('message')

         const message = ref('')

         const handleSubmit = async() => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
            // console.log(chat)
            await addDoc(chat)
            if(!error.value){
                message.value = ''
            }
         }
         return{ handleSubmit, message }
     }
 
 }
</script>
 
 <style>
 form {
     margin: 10px;
 }
 textarea {
     width: 100%;
     max-width: 100%;
     margin-bottom: 6px;
     padding: 10px;
     box-sizing: border-box;
     border: 0;
     border-radius: 20px;
     font-family: inherit;
     outline: none;
 }
 
 </style>