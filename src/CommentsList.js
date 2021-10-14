import React, { Component } from "react";
import "./css-sass/Comments.css";

class CommentList extends Component {
  constructor({ comment }) {
    super(comment);
    this.state = {
      comment: comment,
      open: false
    };
  }
  render() {
    console.log(this.state.open);
    return (
      <div className="row">
        <div className="col-12">
          <h5 onClick={() => this.setState({ open: !this.state.open })}>
            Autohor: {this.state.comment.by}
            {this.state.open ? (
              <p className="singlecomment">
                <span className="tooltiptext">Hide comment</span>
              </p>
            ) : (
              <p className="singlecomment">
                <span className="tooltiptext">Display comment</span>
              </p>
            )}
          </h5>
          {this.state.open ? (
            <p className="singlecomment">
              <span>Comment:</span> {this.state.comment.text}
            </p>
          ) : (
            ""
          )}

          <br />
        </div>
      </div>
    );
  }
}

export default CommentList;
