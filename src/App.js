import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageError from "./components/PageError/PageError";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <PageError></PageError>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
