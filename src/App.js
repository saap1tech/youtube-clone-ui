import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Home/Videos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Body from './Show/Body';
import Upload from './Upload/Upload';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="Body">
          <Sidebar/>
        <Switch>
          <Route path='/upload'>
              <Upload/>
          </Route>
          <Route path='/show/:id'>
              <Body/>
          </Route>
          <Route path=''>
              <Videos/>
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
