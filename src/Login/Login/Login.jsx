import { useContext, useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordType, setPasswordType] = useState(true);
    const { signInUser, createUserWithGoogle, createUserWithGithub } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, {replace: true})
                setError('')
                setEmailError('')
                form.reset();
                toast('Successfully Login')
            })
            .catch(error => {
                console.error(error.message)
                if (error.message == 'Firebase: Error (auth/user-not-found).') {
                    setError('')
                    setEmailError('user-not-found')
                }
                else if (error.message == 'Firebase: Error (auth/wrong-password).') {
                    setEmailError('')
                    setError('wrong-password')
                }

            })
    }


    const handleSignInWithGoogle = () => {
        createUserWithGoogle()
            .then(result => {
                navigate(from, {replace: true})
                console.log(result.user)
                toast("Wow Successfully Login!");
            })
            .catch(error => {
                alert(error.message)
            })
    }
    const handleSignInWithGithub = () => {
        createUserWithGithub()
            .then(result => {
                navigate(from, {replace: true})
                console.log(result.user)
                toast("Wow Successfully Login!");
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div className=' form-width mx-auto my-5 border rounded px-4 py-5 shadow' >
            <h3 className='text-primary'>Login</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                    <Form.Text className="text-muted">
                        <p className='text-danger'> {emailError} </p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type= {passwordType ? 'password' : 'text'} placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p className='text-danger'> {error}  </p>
                </Form.Text>
                <Form.Text className="text-muted">
                    <p className='btn btn-link' onClick={() => setPasswordType(!passwordType)} > <small>{passwordType ? 'Show password' : 'Hide password'} </small></p>
                </Form.Text>
                <Button variant="primary fw-semibold w-100" type="submit">
                    Login
                </Button>
                <p className='text-center mt-3'><small>New to Chef Savvy? <Link to='/register'>Create new Account</Link></small> </p>
                <div className="mt-5">
                    <p onClick={handleSignInWithGoogle} className="btn border border-2 w-100 "> <img className='' style={{ width: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" /> Continue with Google</p>
                </div>
                <div>
                    <p onClick={handleSignInWithGithub} className="btn border border-2 w-100 "> <img className='' style={{ width: '30px' }} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /> Continue with Github</p>
                </div>
            </Form>
        </div>
    );
};

export default Login;