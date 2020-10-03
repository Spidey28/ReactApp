import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Components/Header'
import Footer from "./Components/Footer";
import './tailwind.css'
import Home from './Views/Home'
import About from "./Views/About";
// import ConterExample from './Components/CounterExample'

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className="p-3">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

          </Switch>
        </div>

        <Footer />

      </Router>

      {/* <ConterExample/> */}
    </div>
  );
}

export default App;
