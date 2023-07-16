import React, { useEffect, useState } from "react";
import "./style.css";
import useStoryContext from "../../../hooks/useProductContext";
import { useNavigate } from "react-router-dom";

export default function Index() {
  let navigate = useNavigate();
  let [navmodal, setNavModal] = useState(false);
  let [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const {
    loggedIn,
    logoutPop,
    setLogoutPop,
    setSignPop,
    homeRef,
    navbarRef,
    footerRef,
    bannerRef,
    setRegisterPop,
    setBookFilter,
    bookFilter,
    bookBorderRef,
    setAddStoryPop,
    addStoryPop,
  } = useStoryContext();
  let onClickHamburgerIcon = () => {
    setLogoutPop(!logoutPop);
  };
  let onClickLogout = () => {
    localStorage.clear();
    onClickRefresh();
  };
  let onClickRefresh = () => {
    navigate(0);
  };
  let onClickSignIn = () => {
    setSignPop(true);
    homeRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    bannerRef.current.style.zIndex = -1;
    footerRef.current.style.zIndex = -1;
    navbarRef.current.style.zIndex = -1;
  };
  let OnClickRegister = () => {
    setRegisterPop(true);
    homeRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    bannerRef.current.style.zIndex = -1;
    footerRef.current.style.zIndex = -1;
    navbarRef.current.style.zIndex = -1;
  };

  let onClickBookFilter = () => {
    setBookFilter(!bookFilter);

    if (bookFilter === false) {
      bookBorderRef.current.style.border = "0.2rem solid blue";
    } else {
      bookBorderRef.current.style.border = "none";
    }
  };

  let OnClickAddStory = () => {
    setAddStoryPop(!addStoryPop);
  };

  // Mobile view

  let onClickMbHam = () => {
    setNavModal(!navmodal);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="navbar" ref={navbarRef}>
      <h1 className="navbar-heading" onClick={() => onClickRefresh()}>
        SwipTory
      </h1>
      {loggedIn === false ? (
        <>
          {innerWidth > 500 && (
            <div className="navbar-buttons">
              <button className="register" onClick={() => OnClickRegister()}>
                Register Now
              </button>
              <button className="signin" onClick={() => onClickSignIn()}>
                Sign In
              </button>
            </div>
          )}
          {innerWidth < 500 && (
            <>
              <div className="mb-navbar-buttons" onClick={() => onClickMbHam()}>
                <img src="hamburger.png" alt="" className="mb-hamburger" />
              </div>
              {navmodal && (
                <div className="login-sign-in-section">
                  <div className="mb-close" onClick={() => onClickMbHam()}>
                    <img src="x.png" alt="" className="x-icon" />
                  </div>
                  <div className="navbar-buttons">
                    <button
                      className="register"
                      onClick={() => OnClickRegister()}
                    >
                      Register Now
                    </button>
                    <button className="signin" onClick={() => onClickSignIn()}>
                      Sign In
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {innerWidth > 500 && (
            <div className="navbar-bookmark-addstory-avatar-hamburger">
              <div
                className="bookmark-btn"
                onClick={() => onClickBookFilter()}
                ref={bookBorderRef}
              >
                <img src="bookmark.png" alt="" className="bookmark-img" />
                <p className="bookmark-btn-caption">Bookmarks</p>
              </div>
              <button className="add-story" onClick={() => OnClickAddStory()}>
                Add story
              </button>
              <img src="avatar.png" alt="" className="avatar-img" />
              <img
                src="hamburger.png"
                alt=""
                className="hamburger-icon"
                onClick={() => onClickHamburgerIcon()}
              />
              {logoutPop && (
                <div className="overlay-logout-navbar">
                  <h1 className="your-name">{`Hi! World`}</h1>
                  <button className="logout" onClick={() => onClickLogout()}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
          {innerWidth < 500 && (
            <>
              <div className="mb-navbar-buttons" onClick={() => onClickMbHam()}>
                <img src="hamburger.png" alt="" className="mb-hamburger" />
              </div>
              {navmodal && (
                <div className="login-sign-in-section">
                  <div className="mb-close" onClick={() => onClickMbHam()}>
                    <img src="x.png" alt="" className="x-icon" />
                  </div>
                  <div className="navbar-buttons">
                    <div className="mb-name-avatar">
                      <img src="avatar.png" alt="" className="avatar-img" />
                      <h1 className="your-name">{`Hi! World`}</h1>
                    </div>
                    <button
                      className="add-story"
                      onClick={() => OnClickAddStory()}
                    >
                      Your story
                    </button>
                    <button
                      className="add-story"
                      onClick={() => OnClickAddStory()}
                    >
                      Add story
                    </button>
                    <div
                      className="bookmark-btn"
                      onClick={() => onClickBookFilter()}
                      ref={bookBorderRef}
                    >
                      <img src="bookmark.png" alt="" className="bookmark-img" />
                      <p className="bookmark-btn-caption">Bookmarks</p>
                    </div>
                    <button className="logout" onClick={() => onClickLogout()}>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
