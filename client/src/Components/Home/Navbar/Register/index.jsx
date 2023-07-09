import React from "react";
import "./style.css";
import useStoryContext from "../../../../hooks/useProductContext";

export default function Index() {
  const { setRegisterPop, homeRef, navbarRef, footerRef, bannerRef } =
    useStoryContext();

  let onClickClose = () => {
    homeRef.current.style.backgroundColor = "white";
    bannerRef.current.style.zIndex = 1;
    footerRef.current.style.zIndex = 1;
    navbarRef.current.style.zIndex = 1;

    setRegisterPop(false);
  };
  return (
    <div className="overlay-register-pop">
      <h1 className="heading-register">Register to SwipTory</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <h1 className="username-heading">Username</h1>
            </td>
            <td>
              <input
                type="text"
                name="user"
                className="user"
                placeholder="Enter username"
              />
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="password-heading">Password</h1>
            </td>
            <td>
              <div className="wrapper-password">
                <input
                  type="password"
                  name="password"
                  className="password"
                  placeholder="Enter password"
                />
                <img src="eye.png" alt="" className="eye-img" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="wrapper-login-btn">
        <button className="login">Register</button>
      </div>
      <img
        src="close.png"
        alt=""
        className="close-icon"
        onClick={() => onClickClose()}
      />
    </div>
  );
}
