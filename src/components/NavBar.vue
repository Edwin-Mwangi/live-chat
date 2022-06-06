<template>
  <nav>
    <div>
     <p>hey you....displayname</p>        
     <p class="email">Currently logged in as...email</p>
    </div>
   <button @click="handleLogout">Logout</button>
    
  </nav>
</template>

<script>
import useLogout from '../composbles/useLogout'
export default {
    setup(context){
        const {logout, error} = useLogout()
        const handleLogout = async() =>{
            await logout()
            context.emit(logout)
        }
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