import { AuthContext } from "@/context/auth.context";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

// import { AuthContext } from "../context/auth.context";

// import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  // Redirect to login if the user is not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login"); // Client-side redirect
    }
  }, [isLoggedIn, router]);

  // If the authentication is still loading ⏳
  // if (isLoading) return <p>Loading ...</p>;

  // If the user is not logged in ❌
  if (!isLoggedIn) {
    return null; // Don't render anything while redirecting
  }

  // If the user is logged in, allow to see the page ✅
  return children;
}

export default IsPrivate;
