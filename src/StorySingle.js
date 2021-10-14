import React, { Component, Fragment } from "react";
import { apiService } from "./apiservice/Apiservice";
import Story from "./entites/Story";
import CommentsList from "./CommentsList";
import Loading from "./Loading";
import "../src/css-sass/StorySingle.css";

class StorySingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: null,
      comments: null,
      isLoaded: false
    };
  }
  componentDidMount() {
    apiService
      .fetchSinlgeStory(this.props.match.params.id)
      .then(topStory => {
        return new Story(topStory);
      })
      .then(topStory => {
        this.setState({
          story: topStory
        });
      })
      .then(topStory => {
        console.log(this.state.story.kids);
        if (this.state.story.kids) {
          return this.state.story.kids.map((kid, i) => {
            return apiService.fetchComments(kid);
          });
        }
      })
      .then(x => {
        console.log(x);
        return Promise.all(x);
      })
      .then(y => {
        console.log(y);
        this.setState({
          comments: y,
          isLoaded: true
        });
      })
      .catch(nocomment => {
        this.setState({
          comments: "No Comments"
        });
      });
  }
  render() {
    if (this.state.story === null && this.state.comments === null) {
      return <Loading className="loading" />;
    }
    if (this.state.isLoaded) {
      console.log(this.state.comments[0].text);
    }
    return (
      <Fragment>
        <div>
          <h1> {this.state.story.author} </h1>
          {this.state.isLoaded && this.state.story.kids.length ? (
            this.state.comments.map((comment, i) => {
              return <CommentsList key={i} comment={comment} />;
            })
          ) : (
            <div>
              <p>{this.state.comments}</p>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default StorySingle;
