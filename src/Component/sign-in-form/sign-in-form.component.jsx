import { useState } from "react";
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "../button/button.component";

import { signInWithGooglePopup , createUserDocumentFromAuth , singInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import { Form } from "react-router-dom";

const defaultFormFields = {
    displayName : '',
    email:'',
    password : '',
    confirmPassword:''
}

const SignInForm = ()=>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} =formFields; //destructing injavascrip s when we want any things we can fetch
 

    // console.log(formFields);

    const resetFomrField= ()=>{
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async()=>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async(event)=>{
        event.preventDefault();

    

        try{
            const response = await singInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            
            resetFomrField();
            // console.log(response);



        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                  toast.error('incorrect password');
                  break
                case 'auth/user-not-found':
                  toast.error('No user assosiate with this account');
                  break;
                
                  default:
                    console.log(error);

            }
        }




    }


    const handleChange = (event) =>{
        const {name, value }= event.target;

        setFormFields({...formFields, [name]:value});

    };



    return(

        <div className="sign-up-container">
            <ToastContainer />
            <h2>Already Have An accout?</h2>
            <span>Sign up with email and password</span>

            <form onSubmit={handleSubmit}>
              
               

                <label>Email</label>
                <FormInput 
                    label="Email"
                    type="email" 
                    required  
                    onChange={handleChange} 
                    name='email'
                    value={email}
                />

                <label>Password</label>
                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password'
                    value={password} 
                />
                <div className="buttons-container">

                <Button  typs="submit">Sign In</Button>
                <Button type="button"  buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

               

               
            </form>
        </div>

    )
};

export default SignInForm;