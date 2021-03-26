import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
