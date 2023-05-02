import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, createUserWithGoogle, createUserWithGithub, profileUpdate } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6) {
            setError('Password Minimum six characters long');
            return;
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            profileUpdate(loggedUser, name, photoUrl)
            setError('')
            toast("Wow Successfully Register!");
            form.reset();
        })
        .catch(error => {
            console.error(error.message)
        })
    }

    const handleRegisterWithGoogle = () => {
        createUserWithGoogle()
        .then(result => {
            console.log(result.user)
            toast("Wow Successfully Register!");
        })
        .catch(error => {
            alert(error.message)
        })
    }
    const handleRegisterWithGithub = () => {
        createUserWithGithub()
        .then(result => {
            console.log(result.user)
            toast("Wow Successfully Register!");
        })
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className=' form-width mx-auto my-5 border rounded px-4 py-5 shadow' >
            <h3 className="text-primary">Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" name='name' required />
                    <Form.Text className="text-muted">
                        <p className='text-danger'>  </p>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                    <Form.Text className="text-muted">
                        <p className='text-danger'>  </p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p className="text-danger"><small>{error}</small></p>
                </Form.Text>
                <Form.Text className="text-muted">
                    <p><button className='btn btn-link'>Show password</button></p>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phot URL</Form.Label>
                    <Form.Control type="text" placeholder="Photo URL" name='photo'  />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p className='text-danger'>  </p>
                </Form.Text>

                <Button variant="primary fw-semibold w-100" type="submit">
                    Sign Up
                </Button>
                <p className='text-center mt-3'>Already Have an Account? <Link to='/login'>Login</Link> </p>
                <div className="mt-5">
                    <button onClick={handleRegisterWithGoogle} className="btn border border-2 w-100 "> <img className='' style={{ width: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" /> Continue with Google</button>
                </div>
                <div className="mt-3">
                    <button onClick={handleRegisterWithGithub} className="btn border border-2 w-100 "> <img className='' style={{ width: '30px' }} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /> Continue with Github</button>
                </div>
            </Form>
        </div>
    );
};

export default Register;