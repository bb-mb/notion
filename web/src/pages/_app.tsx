import "../styles/globals.css";
import type { AppProps } from "next/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVG_DQCoCeCapVeTaNnp5MX-5UnZrty7c",
  authDomain: "notion-blog-336610.firebaseapp.com",
  projectId: "notion-blog-336610",
  storageBucket: "notion-blog-336610.appspot.com",
  messagingSenderId: "1012375576219",
  appId: "1:1012375576219:web:7cd18934a5594028cb703e",
  measurementId: "G-91XZYQGWS3",
};

// Initialize Firebase

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }

  return <Component data-theme="light" {...pageProps} />;
}

export default MyApp;
