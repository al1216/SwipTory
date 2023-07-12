const { createContext, useState, useRef } = require("react");

const StoryContext = createContext();

const Provider = ({ children }) => {
  const homeRef = useRef();
  const navbarRef = useRef();
  const footerRef = useRef();
  const bannerRef = useRef();
  const signRef = useRef();
  const bookBorderRef = useRef();
  const allBorderRef = useRef();
  const FoodBorderRef = useRef();
  const HealthBorderRef = useRef();
  const TravelBorderRef = useRef();
  const MovieBorderRef = useRef();
  const EducationBorderRef = useRef();

  const [loggedIn, setLoggedIn] = useState(false);
  const [logoutPop, setLogoutPop] = useState(false);
  const [signinPop, setSignPop] = useState(false);
  const [registerPop, setRegisterPop] = useState(false);
  const [storyPop, setStoryPop] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState([[]]);
  const [fData, setFData] = useState([[]]);
  const [hData, setHData] = useState([[]]);
  const [tData, setTData] = useState([[]]);
  const [mData, setMData] = useState([[]]);
  const [eData, setEData] = useState([[]]);
  const [index, setIndex] = useState();
  const [outerIndex, setOuterIndex] = useState();
  const [clickLike, setClickLike] = useState(false);
  const [clickBook, setClickBook] = useState(false);
  const [copyLink, setCopyLink] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [name, setName] = useState("");
  const [ids, setIds] = useState([]);
  const [upvoteCount, setUpvoteCount] = useState([]);
  const [isLiked, setIsLiked] = useState([]);
  const [category, setCategory] = useState("");
  const [isBook, setIsBook] = useState();
  const [bData, setBData] = useState([[]]);
  const [allFilter, setAllFilter] = useState(true);
  const [foodFilter, setFoodFilter] = useState(false);
  const [healthFilter, setHealthFilter] = useState(false);
  const [bookFilter, setBookFilter] = useState(false);
  const [travelFilter, setTravelFilter] = useState(false);
  const [educationFilter, setEducationFilter] = useState(false);
  const [movieFilter, setMovieFilter] = useState(false);

  const valueToShare = {
    mData,
    setMData,
    eData,
    setEData,
    TravelBorderRef,
    EducationBorderRef,
    MovieBorderRef,
    travelFilter,
    setTravelFilter,
    educationFilter,
    setEducationFilter,
    movieFilter,
    setMovieFilter,
    tData,
    setTData,
    allBorderRef,
    FoodBorderRef,
    HealthBorderRef,
    bookBorderRef,
    bookFilter,
    setBookFilter,
    allFilter,
    setAllFilter,
    foodFilter,
    setFoodFilter,
    healthFilter,
    setHealthFilter,
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
    setIsLiked,
    fData,
    setFData,
    hData,
    setHData,
    category,
    setCategory,
    isBook,
    setIsBook,
    bData,
    setBData,
  };

  return (
    <StoryContext.Provider value={valueToShare}>
      {children}
    </StoryContext.Provider>
  );
};

export { Provider };

export default StoryContext;
