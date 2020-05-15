import React from "react";
import "./App.css";
import Home from "./pages/Home";
import MainBlog from "./pages/MainBlog";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import RenderTop from "./components/RenderTop";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <Navbar />
      <SideNav />
      <RenderTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:slug" component={MainBlog} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
