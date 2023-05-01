
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' w-25 mx-auto my-5 border rounded px-4 py-5 shadow' >
            <h3 className='text-primary'>Login</h3>
            <Form>
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
                    <p className='text-danger'>  </p>
                </Form.Text>
                <Form.Text className="text-muted">
                    <p><button className='btn btn-link'>Show password</button></p>
                </Form.Text>
                <Button variant="primary fw-semibold w-100" type="submit">
                    Login
                </Button>
                <p className='text-center mt-3'>New to Chef Savvy? <Link to='/register'>Create new Account</Link> </p>
                <div className="mt-5">
                    <button className="btn border border-2 w-100 "> <img className='' style={{ width: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" /> Continue with Google</button>
                </div>
                <div className="mt-3">
                    <button className="btn border border-2 w-100 "> <img className='' style={{ width: '30px' }} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /> Continue with Github</button>
                </div>
            </Form>
        </div>
    );
};

export default Login;