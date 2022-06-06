import { ref } from '@vue/reactivity'
import { projectAuth } from "@/firebase/config"

const error = ref(null)

const login = async(email, password) => {
    error.value = null

    try{
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        console.log(res)
        return res

    }catch{
        console.log(error.value)
        error.value = 'incomplete signup'
    }

}
const useLogin = () => {
    return{ error, login }
}

export default useLogin