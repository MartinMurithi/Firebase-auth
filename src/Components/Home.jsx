import React from "react";
import { auth } from "../Config/Firebase";
import { signOut } from "firebase/auth";

function Home() {
  const signout = async () => {
    let x = auth?.currentUser?.email;
    let q = await auth?.signOut();
    console.log(x);
    console.log(q);
  };
  return (
    <>
      <h3>This is the home page</h3>
      <button>Blogs</button>
      <button onClick={signout}>Logout</button>
    </>
  );
}

export default Home;
