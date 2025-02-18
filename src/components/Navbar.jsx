import { AuthContext } from "@/context/auth.context";
import Link from "next/link";
import React, { useContext } from "react";

export default function Navbar() {
  const { logOutUser, isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/content">Content Page</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        {isLoggedIn && (
          <li>
            <button onClick={logOutUser}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
