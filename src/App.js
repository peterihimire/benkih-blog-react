import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import MainBlog from "./pages/MainBlog";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import RenderTop from "./components/RenderTop";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
// import FixedNav from "./components/FixedNav";

function App() {
  return (
    <>
      <Logo />
      <Navbar />
      {/* <FixedNav /> */}
      <SideNav />
      <RenderTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:slug" component={MainBlog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
