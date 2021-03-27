import React from "react";
import Header from "./header/Header";
import "./App.css";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Services from "./components/services/Services"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import RegionCard from "./components/region/RegionCard";
import ScrollToTop from "./components/ScrollToTop"
import Home from './components/home/Home'
import Caucasus from "./components/home/caucasus/Caucasus";


function App() {

  return (

    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/caucasus" component={Caucasus}/>
          <Route path="/iberia"/>
          <Route path="/italy"/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>

    </div>

  );
}


export default App;
