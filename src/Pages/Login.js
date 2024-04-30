import './Pages.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
      <Form>
      <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 w-100" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" className='w-75 mt-5' type="submit">
                    Login
      </Button>
    </Form>
      </header>
    </div>
  );
}

export default Login;
