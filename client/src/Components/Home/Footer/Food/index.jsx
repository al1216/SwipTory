import React from "react";
import "./style.css";
import useStoryContext from "../../../../hooks/useProductContext";
import Loader from "../../../Loader";

export default function Index() {
  const { data,
    setIndex,
    setStoryPop,
    setCategorySelected,
    setOuterIndex 
  } = useStoryContext();

  let onClickStorySelected = (category,story) => {
    for(let i = 0; i < data.length; i++){
      if (data[i] === story) {
        setIndex(0);
        setOuterIndex(i);
      }
    }
    setCategorySelected(category);
    setStoryPop(true);
  }

  return (
    <div className="food-footer">
      <h1 className="food-heading">Top Stories About food</h1>
      <div className="stories-food">
        {data[0].length === 0 ? (
          <Loader />
        ) : (
          data.map((story) => (
            <div className="a-food-story" onClick={() => onClickStorySelected("food",story)}>
              <img
                src={`${story[0] ? story[0].i : ""}`}
                alt=""
                className="food-story-img"
              />
              <div className="wrapper-a-story">
                <h1 className="story-heading">{story[0] ? story[0].h : ""}</h1>
                <p className="story-desc">{story[0] ? story[0].d : ""}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="wrapper-see-more-btn">
        <button className="see-more">See more</button>
      </div>
    </div>
  );
}
