import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './chat/screens/Chat';
import ErrorPage from './404/screens/ErrorPage';

function App() {

  return (
      <Router>
      <Switch>
        <Route path="/" exact component={Chat} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
