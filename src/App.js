import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        
       <div className="p-3">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
       </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
