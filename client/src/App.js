import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './pages/OtherPage';
import Fibonacci from './pages/Fibonacci';

import './App.css';

const App = () => {
  return (
    <Router>
      <h1 className='App'>Fibonacci Calculator</h1>
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/otherpage'>Other Page</Link>
      </div>
      <div className='App'>
        <Route exact path='/' component={Fibonacci} />
        <Route path='/otherpage' component={OtherPage} />
      </div>
    </Router>
  );
};

export default App;
