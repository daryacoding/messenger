import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function SignUpPage (props) {
    return(
        <>
            <h1>SignUp</h1>
            <SignUpForm setUser={props.setUser} />
        </>
    )
}