import React from "react";
import "./App.css";
import Home from "./pages/Home";
import MainBlog from "./pages/MainBlog";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:slug" component={MainBlog} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
