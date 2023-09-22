import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilepic, setProfilepic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(
      (userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        }));
      }
    ).catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilepic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilepic,
        }));
      });
    }).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <img src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png" alt="" />

      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name' type="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" />
        <input value={profilepic} onChange={(e) => setProfilepic(e.target.value)} placeholder='Profilepic url(optional)' type="text" />

        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a member?{" "}
        <span className='login_register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login;