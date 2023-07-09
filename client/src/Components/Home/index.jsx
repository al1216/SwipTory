import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import "./style.css";
import useStoryContext from "../../hooks/useProductContext";
import SignIn from './Navbar/SignIn';
import Register from './Navbar/Register';

export default function Index() {
  const { setLoggedIn, homeRef,signinPop, registerPop } = useStoryContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);
  return (
    <>
      <div className="home-container" ref={homeRef}>
        <Navbar />
        <Banner />
        <Footer />
      </div>
      {signinPop && <SignIn />}
      {registerPop && <Register />}
    </>
  );
}
