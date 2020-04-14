import React from 'react';
import Register from './HTML_page/Register';
import Login from './HTML_page/Login';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import Message from './HTML_page/Message';
import Welcome from "./HTML_page/Welcome";
function App() {
  return (
   <div>
    <Router>
      <ul>
      <Link to="/" exact>Home</Link>
      </ul>
      <ul>
      <Link to="/Login" exact >Login</Link>
      </ul>
      <Route path="/" exact component={Welcome}/>
      <Route path="/Login" exact component={Login}/>
      <Route path="/Register" exact component={Register}/>
      <Route path="/message" exact component={Message}/>
    </Router>
    </div>
  );
}

export default App;
