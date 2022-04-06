import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';


const auth = getAuth(app)

function App() {

  const handeelEmailBlur = (e) => {
    console.log(e.target.value);
  }
  const handelpassBlur = (e) => {
    console.log(e.target.value);
  }

  const formSubmited = (e) => {
    e.preventDefault()
    console.log('submited');
  }


  return (
    <div className='w-50 mt-3 mx-auto'>
      <h1 className='text-primary'>Please Registar</h1>
      <Form onSubmit={formSubmited}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handeelEmailBlur} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handelpassBlur} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
