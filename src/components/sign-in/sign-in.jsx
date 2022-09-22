import React from 'react';
import './sign-in.css';

const SignIn = () => (
    <div className="sign-in">
        <h1> Have an account already?</h1>
        <h3> Sign In here! </h3>

        <form>
            <label htmlFor="email"> Email </label>
            <input name="email" type="email"/>
            <label htmlFor="password"> Password </label>
            <input name="password" type="password"/>
            <label htmlFor="text"> Project Name </label>
            <input name="text" type="text"/>

            <button> SIGN IN </button>
        </form>
        <p> Don't have an account? <a href="hh"> Sign up </a> </p>
    </div>
);

export default SignIn;
