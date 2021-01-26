import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3s1moGKHf1gWSAkPYfd0jxOIHNrOv0KU",
    authDomain: "fir-curd-169b5.firebaseapp.com",
    projectId: "fir-curd-169b5",
    storageBucket: "fir-curd-169b5.appspot.com",
    messagingSenderId: "782172255318",
    appId: "1:782172255318:web:ba8d7637ec0acafe1eb7f7"
  };


 const Firebase = firebase.initializeApp(firebaseConfig)


export default Firebase