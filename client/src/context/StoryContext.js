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
  const [storyPop,setStoryPop] = useState(false);
  const [errorMsg,setErrorMsg] = useState("");
  const [data, setData] = useState([[]]);
  const [index, setIndex] = useState();
  const [outerIndex, setOuterIndex] = useState();
  const [clickLike, setClickLike] = useState(false);
  const [clickBook, setClickBook] = useState(false);
  const [copyLink, setCopyLink] = useState("");
  const [categorySelected,setCategorySelected] = useState("");
  const [name,setName] = useState("");
  const [ids,setIds] = useState([]);
  const [upvoteCount,setUpvoteCount] = useState([]);
  const [isLiked,setIsLiked] = useState([]);

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
    setRegisterPop,
    errorMsg,
    setErrorMsg,
    data, 
    setData,
    index, 
    setIndex,
    storyPop,
    setStoryPop,
    outerIndex, 
    setOuterIndex,
    clickLike, 
    setClickLike,
    clickBook, 
    setClickBook,
    copyLink, 
    setCopyLink,
    categorySelected,
    setCategorySelected,
    name,
    setName,
    ids,
    setIds,
    upvoteCount,
    setUpvoteCount,
    isLiked,
    setIsLiked
  };

  return (
    <StoryContext.Provider value={valueToShare}>
      {children}
    </StoryContext.Provider>
  );
};

export { Provider };

export default StoryContext;
