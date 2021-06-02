import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* Pages router */}
      <Router>
        <Switch>
          {/* Home page */}
          <Route exact path = '/'>
            {/* Login component */}
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
