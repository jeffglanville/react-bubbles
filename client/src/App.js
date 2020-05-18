import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from './components/PrivateRoute';
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import Logoff from './components/Logoff';
import "./styles.scss";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/logoff">Logoff</Link>
      </nav>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/protected" component={BubblePage} />
        <ProtectedRoute path="/logoff" component={Logoff} />
      </div>
    </Router>
  );
}

export default App;
