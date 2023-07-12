import React, { useEffect } from "react";
import "./style.css";
import Food from "./Food";
import Health from "./Health";
import useStoryContext from "../../../hooks/useProductContext";
import BookMarks from "./BookMarks";
import axios from "axios";
import Travel from "./Travel";
import Movie from './Movie';
import Education from './Education';

export default function Index() {
  const {
    footerRef,
    setBData,
    bData,
    bookFilter,
    allFilter,
    foodFilter,
    healthFilter,
    travelFilter,
    educationFilter,
    movieFilter,
  } = useStoryContext();

  let getData = async () => {
    await axios
      .get(`${process.env.REACT_APP_HOST}/api/get-bookmarks`)
      .then((res) => {
        setBData(res.data.oArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="footer" ref={footerRef}>
      {bookFilter === true && bData[0].length >= 1 && <BookMarks />}
      {(allFilter || foodFilter) && !bookFilter && <Food />}
      {(allFilter || healthFilter) && !bookFilter && <Health />}
      {(allFilter || travelFilter) && !bookFilter && <Travel />}
      {(allFilter || movieFilter) && !bookFilter && <Movie />}
      {(allFilter || educationFilter) && !bookFilter && <Education />}
    </div>
  );
}
