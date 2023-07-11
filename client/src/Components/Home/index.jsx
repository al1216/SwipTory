import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import "./style.css";
import useStoryContext from "../../hooks/useProductContext";
import SignIn from "./Navbar/SignIn";
import Register from "./Navbar/Register";
import axios from "axios";
import StoryPop from './Footer/StoryPop';

export default function Index() {
  const { setLoggedIn, 
    homeRef, 
    signinPop, 
    registerPop, 
    setData,
    storyPop,
    setIds,
    setUpvoteCount,
    setIsLiked
  } =
    useStoryContext();

  let getData = async () => {
    await axios
      .get(`${process.env.REACT_APP_HOST}/api/get-stories`)
      .then((res) => {
        setData(res.data.oArr);
        setIds(res.data.ids);
        setUpvoteCount(res.data.upvotesCount);
        setIsLiked(res.data.liked);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {storyPop && <StoryPop />}
    </>
  );
}
