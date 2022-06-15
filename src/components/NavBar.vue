<template>
  <nav v-if="user">
    <div>
     <p>hey you....{{ user.displayName }}</p>        
     <p class="email">Currently logged in as...{{ user.email }}</p>
    </div>
   <button @click="handleLogout">Logout</button>
    
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '@/composables/getUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
    setup(props, context){
        const {logout, error} = useLogout()
        const { user } = getUser()
        const router = useRouter()

        const handleLogout = async() =>{
            await logout()
            if(!error.value){
                console.log('user logged out')
                context.emit('logout')
            }
        }        
            
        
        return { handleLogout, user}
    }

}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p{
    font-size: 16px;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}

</style>