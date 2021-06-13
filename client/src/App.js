import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './pages/OtherPage';
import Fibonacci from './pages/Fibonacci';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>learn react</div>
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
