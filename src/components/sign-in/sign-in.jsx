import React from 'react';
import './sign-in.css';
import {Link} from 'react-router-dom'; 

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
        <p>Don't have an account? <Link to='/signup'> Sign up </Link>  </p>
        <p><Link to='/'> Back to Home </Link> </p>
    </div>
);

export default SignIn;
