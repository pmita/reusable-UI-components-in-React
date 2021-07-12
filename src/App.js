import React from 'react';
//import any component you want here
import Button from './components/Dumb Button/Button';
import About from './pages/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
        <Button />
      </BrowserRouter>

    </div>
  );
}

export default App;
