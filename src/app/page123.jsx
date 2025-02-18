// import styles from "./page.module.css";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

import "./globals.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Welcome to My Next.js App</h1>
        <p>This is a sample application to demonstrate Next.js features.</p>
      </div>
    </>
  );
}
