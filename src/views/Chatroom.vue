 <template>
   <p>Chatroom</p>
   <div class="container">
      <NavBar @logout="logout"/>
   </div>
 </template>
 
 <script>
import { useRouter } from 'vue-router'
 import NavBar from '../components/NavBar.vue'
 export default {
   components: { NavBar},
   setup() {
     const router = useRouter()

     const logout = () =>{
       router.push({ name: 'Welcome' })
     }

   } 
   
 }
 </script>
 
 <style>
 
 </style>