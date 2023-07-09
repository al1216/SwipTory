const { createContext, useState, useRef } = require("react");

const StoryContext = createContext();

const Provider = ({ children }) => {
  const homeRef = useRef();
  const navbarRef = useRef();
  const footerRef = useRef();
  const bannerRef = useRef();
  const signRef = useRef();
  const [loggedIn, setLoggedIn] = useState(false);
  const [logoutPop, setLogoutPop] = useState(false);
  const [signinPop, setSignPop] = useState(false);
  const [registerPop, setRegisterPop] = useState(false);


  const valueToShare = {
    loggedIn,
    setLoggedIn,
    logoutPop,
    setLogoutPop,
    signinPop,
    setSignPop,
    homeRef,
    navbarRef,
    footerRef,
    bannerRef,
    signRef,
    registerPop, 
    setRegisterPop
  };

  return (
    <StoryContext.Provider value={valueToShare}>
      {children}
    </StoryContext.Provider>
  );
};

export { Provider };

export default StoryContext;
