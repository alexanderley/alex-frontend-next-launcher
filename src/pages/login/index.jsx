import React, { useContext, useState } from "react";
import axios from "axios";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { AuthContext } from "@/context/auth.context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5005/auth/login", {
        email,
        password,
      });
      storeToken(response.data.authToken);
      authenticateUser();
      // #Todo - Redirect to the dashboard
    } catch (error) {
      const errorDescription =
        error.response?.data?.message || "An error occurred";
      console.error("Error logging in:", errorDescription);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Login</h2>
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

        <button type="submit">Login</button>
        <div className="signupInfo">
          <span>Already got a account?</span>
          <Link href="/signup">Signup here</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
