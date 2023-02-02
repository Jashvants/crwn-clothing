import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../Component/sign-up/sign-up-form.component";

import {
    auth,
    signInWithGooglePopup ,
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

const SignIn = () => {
     

    //This is just for our learning purpose so i commentedthisout 
    // useEffect(()=>{
    //     const FetchData= async()=>{
    //         const response = await getRedirectResult(auth);
    //         // console.log(response);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     FetchData();
    // },[]);


    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>SIGN IN With Google Account</button>
            {/* <button onClick={signInWithGoogleRedirect}>SIGN IN With Google Redirect</button> */}
            <SignUpForm/>
        </div>
    );
};


export default SignIn;