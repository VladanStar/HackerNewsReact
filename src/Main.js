import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Stories from "./Stories";
import StorySingle from "./StorySingle";

const Main = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Stories} />
      <Route path="/singlestory/:id" component={StorySingle} />
      <Route path="url" />
    </Fragment>
  );
};

export default Main;
