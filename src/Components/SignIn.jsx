import React, { useState } from "react";
import { auth } from "../Config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(email);
      console.log('Successfully logged in');
      navigate('/blog');
    } catch (error) {
      setError(error);
      console.log(`${error} an error occurred`);
    }
  }
  return (
    <>
      <input
        type="text"
        placeholder="example@gmail.com"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input type="password" name="password" id="" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={login}>Login</button>
      {error ? <h5>An error occured { error.message }</h5> : null}
    </>
  );
}

export default SignIn;
