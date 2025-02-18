import React, { useContext, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "../../components/Navbar";

import { AuthContext } from "@/context/auth.context";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { storeToken, authenticateUser } = useContext(AuthContext);

  // console.log("storeToken", storeToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (response.data) {
        console.log("Login successful:", response);
        storeToken(response.data.authToken);
        authenticateUser();

        // router.push("/projects");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Navbar />
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="signupInfo">
          <span>Haven't got a account yet?</span>
          <Link href="/login">Login here</Link>
        </div>
      </form>
    </>
  );
};

export default Signup;
