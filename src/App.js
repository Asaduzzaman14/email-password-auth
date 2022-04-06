import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handeelEmailBlur = (e) => {
    setEmail(e.target.value);
  }
  const handelpassBlur = (e) => {
    setPass(e.target.value);
  }

  const hanelformSubmit = (e) => {

    createUserWithEmailAndPassword(auth, email, pass)
      .then(result => {
        console.log(result.user);
      })
      .catch(err => console.log(err))
    e.preventDefault()
  }


  return (
    <div className='w-50 mt-4 mx-auto'>
      <h1 className='text-primary'>Please Registar</h1>
      <Form onSubmit={hanelformSubmit}>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
