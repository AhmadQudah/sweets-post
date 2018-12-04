import React from "react";
import Post from "./components/Post";
import PostForm from "./components/Postform";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./components/store";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <PostForm />
      <hr />
      <Post />
    </div>
  </Provider>,
  document.querySelector("#root")
);
