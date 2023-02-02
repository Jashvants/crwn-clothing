import { useState } from "react";
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss';

import Button from "../button/button.component";

import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import { Form } from "react-router-dom";

const defaultFormFields = {
    displayName : '',
    email:'',
    password : '',
    confirmPassword:''
}

const SignUpForm = ()=>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const { displayName,email,password,confirmPassword} =formFields; //destructing injavascrip s when we want any things we can fetch
 

    console.log(formFields);

    const resetFomrField= ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();

        if(password!=confirmPassword){
            alert('password do not match');
            return;

        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});

            resetFomrField();
            // console.log(response);



        }catch(error){
            if(error.code ==='auth/email-already-in-use'){
                alert('Email already created');
            }
            else{
                console.log('user creation encountered error',error);
            }
            console.log('user created encountered an error',error);

        }




    }


    const handleChange = (event) =>{
        const {name, value }= event.target;

        setFormFields({...formFields, [name]:value})

    };



    return(

        <div className="sign-up-container">
            <h2>Dont Have An accout?</h2>
            <span>Sign up with email and password</span>

            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <FormInput 
                    label="Display Name"
                    type="text"    
                    required 
                    onChange = {handleChange} 
                    name='displayName' 
                    value={displayName} 
                />

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

                <label>Confirm Password</label>
                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <Button  typs="submit">Sign Up</Button>
            </form>
        </div>

    )
};

export default SignUpForm;