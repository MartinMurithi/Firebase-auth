import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../Config/Firebase";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  async function createUser(){
    try {
      let user = (await createUserWithEmailAndPassword(auth, email, password));
      console.log(user.user);
      await updateProfile({
        name: { displayName }
      });
      <h5>Account created Successfully</h5>
      navigate('/');
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setEmail("");
    setPassword("");
  }

  return (
    <>
      
      <input
        type="text"
        placeholder="display name....."
        required
        value={displayName}
        onChange={(e) => {
          setDisplayName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="example@gmail.com"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        id=""
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={createUser} >Signup</button>
      {error ? <h5>An error occured { error.message }</h5> : null}
    </>
  );
}

export default SignUp;
