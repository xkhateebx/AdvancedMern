import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import PlayerList from './components/PlayerList';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="player/"/>
        <PlayerList path="players/" />
      </Router>
    </div>
  );
}
export default App;