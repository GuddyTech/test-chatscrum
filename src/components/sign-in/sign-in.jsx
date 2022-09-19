import React from 'react';
import './sign-in.css';

const SignIn = () => (
    <div className="sign-in">
        <h1> Have an Account already?</h1>
        <h3> Sign in here! </h3>

        <form>
            <label for="email"> Email </label>
            <input name="email" type="email"/>
            <label for="password"> Password </label>
            <input name="password" type="password"/>
            <label for="text"> Project Name </label>
            <input name="text" type="text"/>

            <button> SIGN UP</button>
        </form>
        <p> Don't have an account? <a href="#"> Sign up </a> </p>
    </div>
);

export default SignIn;
