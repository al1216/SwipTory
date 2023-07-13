import React from "react";
import "./style.css";
import useStoryContext from "../../../hooks/useProductContext";
import { useNavigate } from "react-router-dom";

export default function Index() {
  let navigate = useNavigate();
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
    addStoryPop
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
  }

  let onClickBookFilter = () => {
    setBookFilter(!bookFilter);

    if (bookFilter === false){
      bookBorderRef.current.style.border = "0.2rem solid blue";
    }
    else{
      bookBorderRef.current.style.border = "none";
    }
  }

  let OnClickAddStory = () => {
    setAddStoryPop(!addStoryPop);
  }
  return (
    <div className="navbar" ref={navbarRef}>
      <h1 className="navbar-heading" onClick={() => onClickRefresh()}>
        SwipTory
      </h1>
      {loggedIn === false ? (
        <div className="navbar-buttons">
          <button className="register" onClick={() => OnClickRegister()}>Register Now</button>
          <button className="signin" onClick={() => onClickSignIn()}>
            Sign In
          </button>
        </div>
      ) : (
        <div className="navbar-bookmark-addstory-avatar-hamburger">
          <div className="bookmark-btn" onClick={() => onClickBookFilter()} ref={bookBorderRef}>
            <img src="bookmark.png" alt="" className="bookmark-img" />
            <p className="bookmark-btn-caption">Bookmarks</p>
          </div>
          <button className="add-story" onClick={() => OnClickAddStory()}>Add story</button>
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
    </div>
  );
}
