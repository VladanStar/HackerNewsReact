import React, { Component, Fragment } from "react";
import { apiService } from "./apiservice/Apiservice";
import Story from "./entites/Story";
import StoriesRow from "./StoriesRow";
import Loading from "./Loading";
import "./css-sass/Stories.css";
class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStory: []
    };
  }
  componentDidMount() {
    apiService
      .fetchTopStoriesId()
      .then(topStoriesID => {
        return topStoriesID;
      })
      .then(topStoriesID => {
        return topStoriesID.map((topStoryID, i) => {
          return apiService
            .fetchSinlgeStory(topStoryID)
            .then(topStory => {
              return new Story(topStory);
            })
            .then(topStory => {
              this.setState({
                topStory: [...this.state.topStory, topStory]
              });
            });
        });
      });
  }

  render() {
    if (this.state.topStory == null) {
      return <Loading />;
    }

    return (
      <Fragment>
        {this.state.topStory.map((singleTopStory, i) => {
          return (
            <div className="col-12 allStory">
              <StoriesRow key={i} singleTopStory={singleTopStory} />
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default Stories;
