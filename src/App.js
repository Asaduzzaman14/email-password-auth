import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [validated, setValidated] = useState(false);
  const [register, setRegistar] = useState(false)

  const handelName = (event) => {
    setName(event.target.value)

  }

  const handelRegister = (event) => {
    setRegistar(event.target.checked)
  }
  const handeelEmailBlur = (e) => {
    setEmail(e.target.value);
  }
  const handelpassBlur = (e) => {
    setPass(e.target.value);
  }

  const hanelformSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return
    }

    if (!/(?=.*[!@#$%^&*])/.test(pass)) {
      setError('password should contain at least one spacial carecter')

      return
    }
    setValidated(true);
    setError('')

    if (register) {
      signInWithEmailAndPassword(auth, email, pass)
        .then((result) => {
          console.log(result.user);
          console.log('login success');

        })
        .catch((err) => {
          console.log(err);
          setError(err.message)
        })

    } else {
      createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
          console.log(result.user);
          console.log('register success');
          setEmail('')
          setPass('')
          verifyEmail()
          setuserName()
        })
        .catch(err => {
          console.log(err)
          setError(err.message)

        })
    }



    event.preventDefault();
  };
  const forgatePassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('password reset email send');
      })
      .catch(err => {
        console.log(err);
      })
  }
  const setuserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        console.log('updated');
      })
      .catch(err => {
        setError(err.message)
      })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(res => {
        console.log('verifide link send');
      })
      .catch(error => {
        console.log(error);
      })

  }





  return (


    <div className='w-50 mt-4 mx-auto'>
      <h1 className='text-primary'>Please {register ? 'LogIn' : 'Register'} !!</h1>

      <Form noValidate validated={validated} onSubmit={hanelformSubmit}>
        {(!register) &&
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control onBlur={handelName} type="text" placeholder="Your Name" required />
          </Form.Group>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handeelEmailBlur} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handelpassBlur} type="password" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onChange={handelRegister} type="checkbox" label="Already Registered" />
        </Form.Group>
        <p className='text-danger'>{error}</p>
        <Button variant="primary" type="submit">
          {register ? 'LogIn' : 'Register'}
        </Button>
        <Button onClick={forgatePassword} variant="link">Forgate Password</Button>
      </Form>
    </div>
  );
}

export default App;
