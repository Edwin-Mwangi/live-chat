import { projectFirestore } from "@/firebase/config"
import { ref } from '@vue/reactivity'

const useCollection = (collection) => {
    const error = ref(null) 
    const addDoc = async (doc) => {
        error.value = null
        try {
            await projectFirestore.collection(collection).add(doc)
        } catch (error) {
            console.log(error.message)
            error.value = 'Could not send message'
        }
    }
    return { addDoc, error }
}

export default useCollection