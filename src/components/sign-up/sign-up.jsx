import React from 'react'
import './sign-up.css'


const SignUp = () => (
    <div className="sign-up">
        <h1> Don't have an account?</h1>
        <h3> Sign Up here!</h3>
        <form>
            <label for="text"> Full Name </label>
                <input name="text" type="text"/>
                <label for="email"> Email </label>
                <input name="email" type="email"/>
                <label for="password"> Password </label>
                <input name="password" type="password"/>
            
            <label for="options"> User Type </label>
            <select id="options">
                <option value="Developer"> Developer </option>
                <option value="Owner"> Owner </option>
                <option value="Client"> Client </option>
            </select>

            <button> SIGN UP </button>
        </form>
    </div>
)

export default SignUp;