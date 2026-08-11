import { useState } from "react";
import './LoginForm.css';

export function LoginForm(){

    const [showPassword, setShowPassword] = useState(false);

    function showHidePassword(){
        if(showPassword){
            setShowPassword(false);
        }
        else{
            setShowPassword(true);
        }
    }
    return (
        <>
            <div>
                <input placeholder="Email" className="input-email"/>
            </div>

            <div>
                <input 
                    placeholder="Password"
                    type={showPassword ? 'text': 'password'}
                    className="input-password"
                />
                
                <button
                    className="show-password-button"
                    onClick={showHidePassword}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>

            <button className="login-button">Login</button>
            <button className="sign-up-button">Sign up</button>
        </>
    )
}