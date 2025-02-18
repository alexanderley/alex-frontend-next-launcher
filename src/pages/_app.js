import "../app/globals.scss";
import { AuthProviderWrapper } from "@/context/auth.context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <Component {...pageProps} />
    </AuthProviderWrapper>
  );
}

export default MyApp;
