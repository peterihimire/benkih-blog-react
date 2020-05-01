import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singlepost" component={SinglePost} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
