import React from "react";
import "./style.css";
import useStoryContext from '../../../hooks/useProductContext';

export default function Index() {
  const {bannerRef} = useStoryContext();
  return (
    <div className="banner" ref={bannerRef}>
      <div className="all-filter">
        <img src="all.jpg" alt="" className="all-img" />
        <div className="wrapper-all">
          <h1 className="heading-all">ALL</h1>
        </div>
      </div>
      <div className="food-filter">
        <img src="food.png" alt="" className="food-img" />
        <div className="wrapper-all">
          <h1 className="heading-food">Food</h1>
        </div>
      </div>
      <div className="medical-filter">
        <img src="health.jpg" alt="" className="medical-img" />
        <div className="wrapper-all">
          <h1 className="heading-medical">Health & Fitness</h1>
        </div>
      </div>
      <div className="travel-filter">
        <img src="travel.jpg" alt="" className="travel-img" />
        <div className="wrapper-all">
          <h1 className="heading-travel">Travel</h1>
        </div>
      </div>
      <div className="movie-filter">
        <img src="movie.jpg" alt="" className="movie-img" />
        <div className="wrapper-all">
          <h1 className="heading-movie">Movie</h1>
        </div>
      </div>
      <div className="education-filter">
        <img src="education.jpg" alt="" className="education-img" />
        <div className="wrapper-all">
          <h1 className="heading-education">Education</h1>
        </div>
      </div>
    </div>
  );
}
