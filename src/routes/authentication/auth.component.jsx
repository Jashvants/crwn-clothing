

import SignUpForm from "../../Component/sign-up/sign-up-form.component";
import SignInForm from "../../Component/sign-in-form/sign-in-form.component";
import "./auth.styles.scss";

import {
    auth,
    signInWithGooglePopup ,
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

const Authentication = () => {
     

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
        <div className="authentication-container">
       
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};


export default Authentication;