import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';


const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>

    </div>
  );
};

export default App;
