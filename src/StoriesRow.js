import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./css-sass/Storiesrow.css";

const StoriesRow = ({ singleTopStory }) => {
  return (
    <Fragment>
      <div className="singleStory">
        <a href={`${singleTopStory.url}`} target="_blank">
          <h5>{singleTopStory.title}</h5>
        </a>
        <div className="asd">
          <p>
            Author {singleTopStory.author}
            <span>Score: {singleTopStory.score}</span>
            <Link to={`/singlestory/${singleTopStory.id}`}>
              <span>Number of comments: {singleTopStory.descendants}</span>
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default StoriesRow;
