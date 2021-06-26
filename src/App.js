import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/private-route";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </PrivateRoute>
        </Switch>
      </div>
  );
}

export default App;
