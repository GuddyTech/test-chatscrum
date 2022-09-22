import React from 'react'
import './sign-up.css'
// import the index.js here
import content from '../../static/index'

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
     

const schema = yup.object().shape(
    {
        fullname: yup.string().required("full name is a required field").min(6),
        email: yup.string().email().required("please enter a valid Email"),
        password: yup.string().required("please enter password")
        .matches(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/, 
        "Must contain 8 characters, One Uppercase, One Lowercase, One Number and One Specialcase Character")
    }
);

const SignUp = () => {

    const {register, handleSubmit, formState: {errors} } = useForm(
        {
           resolver: yupResolver(schema)
        }
    );

    const onSubmit = (data) => console.log(data);

    return (

    <div className="sign-up">
        <h1> Don't have an account? </h1>
        <h3> Sign Up here! </h3>
        <form onSubmit={handleSubmit(onSubmit)}>    
            

            {/* <label htmlFor="text"> Full Name </label>
                <input name="text" type="text"/>
                <label htmlFor="email"> Email </label>
                <input name="email" type="email"/>
                <label htmlFor="password"> Password </label>
                <input name="password" type="password"/> */}
               
{/* input the index.js here */}

{content.inputs.map((input, key) => { 
    return (
        <div key={key}>
            <label htmlFor={input.name}> {input.label} </label>
            <br />
            <input type={input.type} name={input.name} placeholder={input.placeholder} {...register("input.name")}/>
            <br />
            <span className="message">{errors[input.name]?.message}</span>
        </div>
    )
})}

            <label htmlFor="options"> User Type </label>
            <select id="options">
                <option value="Developer"> Developer </option>
                <option value="Owner"> Owner </option>
                <option value="Client"> Client </option>
            </select>

            <button> SIGN UP </button>
        </form>
    </div>
    )
}
export default SignUp;