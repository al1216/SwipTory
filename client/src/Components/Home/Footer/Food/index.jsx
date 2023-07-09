import React from "react";
import "./style.css";

export default function Index() {
  return (
    <div className="food-footer">
      <h1 className="food-heading">Top Stories About food</h1>
      <div className="stories-food">
        <div className="a-food-story">
          <img src="story.png" alt="" className="food-story-img" />
          <div className="wrapper-a-story">
            <h1 className="story-heading">Heading comes here</h1>
            <p className="story-desc">
              Inspirational designs, illustrations, and graphic elements from
              the world’s best designers.
            </p>
          </div>
        </div>
        <div className="a-food-story">
          <img src="story.png" alt="" className="food-story-img" />
          <div className="wrapper-a-story">
            <h1 className="story-heading">Heading comes here</h1>
            <p className="story-desc">
              Inspirational designs, illustrations, and graphic elements from
              the world’s best designers.
            </p>
          </div>
        </div>
        <div className="a-food-story">
          <img src="story.png" alt="" className="food-story-img" />
          <div className="wrapper-a-story">
            <h1 className="story-heading">Heading comes here</h1>
            <p className="story-desc">
              Inspirational designs, illustrations, and graphic elements from
              the world’s best designers.
            </p>
          </div>
        </div>
        <div className="a-food-story">
          <img src="story.png" alt="" className="food-story-img" />
          <div className="wrapper-a-story">
            <h1 className="story-heading">Heading comes here</h1>
            <p className="story-desc">
              Inspirational designs, illustrations, and graphic elements from
              the world’s best designers.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper-see-more-btn">
      <button className="see-more">See more</button>
      </div>
      
    </div>
  );
}
