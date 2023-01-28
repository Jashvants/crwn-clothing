import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvz5fsSnwECJJd3BL63iBcjvoslXJZ0Vs",
    authDomain: "crown-project-db-8b05e.firebaseapp.com",
    projectId: "crown-project-db-8b05e",
    storageBucket: "crown-project-db-8b05e.appspot.com",
    messagingSenderId: "678616648889",
    appId: "1:678616648889:web:be1f12fa9c9d8d4fb01f68"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth= getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db = getFirestore();

 export  const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef=doc(db,'user',userAuth.uid);

    console.log(userDocRef);


    const userSnapShot = await getDoc(userDocRef);
    // console.log(userSnapShot);
    // console.log(userSnapShot.exists());

    //if user data exit
    if(!userSnapShot.exists()){
      const { displayName , email } = userAuth;
      const createAt = new Date();
   

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createAt
      });
    }
    catch(error){
      console.log('error createing the user',error.message);
    }

    return userDocRef();


    //if user data not exit
  }
};