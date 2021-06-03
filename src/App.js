import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* Pages router */}
      <Router>
        <Switch>
          {/* Login page */}
          <Route exact path = '/' component={Login}></Route>
          {/* Home page */}
          <Route path= '/home' component={Header}>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
