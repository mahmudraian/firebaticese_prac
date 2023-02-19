import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
import app from './firebase.init/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);



function App() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const [user,setUser]=useState([])



  const handlegoogelbutton=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result =>{
    const user=result.user;
    console.log(user);
    setUser(user)
    })
    .catch(error=>{
      console.log('error',error)
    })
    }

  const  handlegithubsignin=()=>{
    signInWithPopup(auth,githubProvider)
   .then(result =>{
    const user=result.user;
     console.log(user);
   })
   .catch(error=>{
    console.error('error',error)
   })
  }


const handlesignout=()=>{
  signOut(auth)
  .then(()=>{setUser({})})
  .catch(()=>{
    setUser({})
  })
}


  return (
    <div className="App">


      { user.email ? <button onClick={handlesignout}>Sign Out</button>
      : 
      <>
      <button onClick={handlegoogelbutton}>Googele Sign in</button>
      <button onClick={handlegithubsignin} >GitHub Sign In!</button>
      </>
     
}


      {user.email &&<div>
        <h3>Name:{user.displayName}</h3>
        <p>Email Address:{user.email}</p>
        <img src={user.photoURL} alt=''></img>
      </div>}
     
    </div>
  );
}

export default App;
