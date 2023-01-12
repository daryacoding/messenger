// AuthPage.js
import './AuthPage.css'
import SignUpForm from "../SignUpForm/SignUpForm"
import LoginForm from "../LoginForm/LoginForm"

export default function AuthPage(props){
    return(
        <main>
            <h2>Please Sign Up or Login</h2>
            <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser}/>
        </main>
    )
}