import React from "react";
import "./style.css";
import useStoryContext from "../../../hooks/useProductContext";

export default function Index() {
  const {
    bannerRef,
    setAllFilter,
    setFoodFilter,
    setHealthFilter,
    setBookFilter,
    allBorderRef,
    FoodBorderRef,
    HealthBorderRef,
    bookBorderRef,
    TravelBorderRef,
    EducationBorderRef,
    MovieBorderRef,
    setTravelFilter,
    setEducationFilter,
    setMovieFilter,
    loggedIn,
  } = useStoryContext();

  let setFilter = (filter) => {
    switch (filter) {
      case "all":
        setBookFilter(false);
        setAllFilter(true);
        setFoodFilter(true);
        setHealthFilter(true);
        setTravelFilter(true);
        setEducationFilter(true);
        setMovieFilter(true);
        allBorderRef.current.style.border = "0.2rem solid blue";
        FoodBorderRef.current.style.border = "none";
        HealthBorderRef.current.style.border = "none";
        if (loggedIn) bookBorderRef.current.style.border = "none";
        TravelBorderRef.current.style.border = "none";
        EducationBorderRef.current.style.border = "none";
        MovieBorderRef.current.style.border = "none";
        break;

      case "food":
        setBookFilter(false);
        setAllFilter(false);
        setFoodFilter(true);
        setHealthFilter(false);
        setTravelFilter(false);
        setEducationFilter(false);
        setMovieFilter(false);
        allBorderRef.current.style.border = "none";
        FoodBorderRef.current.style.border = "0.2rem solid blue";
        HealthBorderRef.current.style.border = "none";
        if (loggedIn) bookBorderRef.current.style.border = "none";
        TravelBorderRef.current.style.border = "none";
        EducationBorderRef.current.style.border = "none";
        MovieBorderRef.current.style.border = "none";
        break;

      case "health":
        setBookFilter(false);
        setAllFilter(false);
        setFoodFilter(false);
        setHealthFilter(true);
        setTravelFilter(false);
        setEducationFilter(false);
        setMovieFilter(false);
        allBorderRef.current.style.border = "none";
        FoodBorderRef.current.style.border = "none";
        HealthBorderRef.current.style.border = "0.2rem solid blue";
        if (loggedIn) bookBorderRef.current.style.border = "none";
        TravelBorderRef.current.style.border = "none";
        EducationBorderRef.current.style.border = "none";
        MovieBorderRef.current.style.border = "none";
        break;

      case "travel":
        setBookFilter(false);
        setAllFilter(false);
        setFoodFilter(false);
        setHealthFilter(false);
        setTravelFilter(true);
        setEducationFilter(false);
        setMovieFilter(false);
        allBorderRef.current.style.border = "none";
        FoodBorderRef.current.style.border = "none";
        HealthBorderRef.current.style.border = "none";
        if (loggedIn) bookBorderRef.current.style.border = "none";
        TravelBorderRef.current.style.border = "0.2rem solid blue";
        EducationBorderRef.current.style.border = "none";
        MovieBorderRef.current.style.border = "none";
        break;

      case "movie":
        setBookFilter(false);
        setAllFilter(false);
        setFoodFilter(false);
        setHealthFilter(false);
        setTravelFilter(false);
        setEducationFilter(false);
        setMovieFilter(true);
        allBorderRef.current.style.border = "none";
        FoodBorderRef.current.style.border = "none";
        HealthBorderRef.current.style.border = "none";
        if (loggedIn) bookBorderRef.current.style.border = "none";
        TravelBorderRef.current.style.border = "none";
        EducationBorderRef.current.style.border = "none";
        MovieBorderRef.current.style.border = "0.2rem solid blue";
        break;

      case "education":
        setBookFilter(false);
        setAllFilter(false);
        setFoodFilter(false);
        setHealthFilter(false);
        setTravelFilter(false);
        setEducationFilter(true);
        setMovieFilter(false);
        allBorderRef.current.style.border = "none";
        FoodBorderRef.current.style.border = "none";
        HealthBorderRef.current.style.border = "none";
        if (loggedIn) bookBorderRef.current.style.border = "none";
        TravelBorderRef.current.style.border = "none";
        EducationBorderRef.current.style.border = "0.2rem solid blue";
        MovieBorderRef.current.style.border = "none";
        break;
      default:
        break;
    }
  };
  return (
    <div className="banner" ref={bannerRef}>
      <div
        className="all-filter"
        onClick={() => setFilter("all")}
        ref={allBorderRef}
      >
        <img src="all.jpg" alt="" className="all-img" />
        <div className="wrapper-all">
          <h1 className="heading-all">ALL</h1>
        </div>
      </div>
      <div
        className="food-filter"
        onClick={() => setFilter("food")}
        ref={FoodBorderRef}
      >
        <img src="food.png" alt="" className="food-img" />
        <div className="wrapper-all">
          <h1 className="heading-food">Food</h1>
        </div>
      </div>
      <div
        className="medical-filter"
        onClick={() => setFilter("health")}
        ref={HealthBorderRef}
      >
        <img src="health.jpg" alt="" className="medical-img" />
        <div className="wrapper-all">
          <h1 className="heading-medical">Health & Fitness</h1>
        </div>
      </div>
      <div
        className="travel-filter"
        onClick={() => setFilter("travel")}
        ref={TravelBorderRef}
      >
        <img src="travel.jpg" alt="" className="travel-img" />
        <div className="wrapper-all">
          <h1 className="heading-travel">Travel</h1>
        </div>
      </div>
      <div
        className="movie-filter"
        onClick={() => setFilter("movie")}
        ref={MovieBorderRef}
      >
        <img src="movie.jpg" alt="" className="movie-img" />
        <div className="wrapper-all">
          <h1 className="heading-movie">Movie</h1>
        </div>
      </div>
      <div
        className="education-filter"
        onClick={() => setFilter("education")}
        ref={EducationBorderRef}
      >
        <img src="education.jpg" alt="" className="education-img" />
        <div className="wrapper-all">
          <h1 className="heading-education">Education</h1>
        </div>
      </div>
    </div>
  );
}
