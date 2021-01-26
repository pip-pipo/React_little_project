import Firebase from './Services/firebase'

const getAll = (email,password) => {
    Firebase.auth().createUserWithEmailAndPassword(email,password).then(()=> alert('accout successfullt created')).catch(err=>console.log(err))
}



const commentServices = {
    getAll,
    
}

export default commentServices