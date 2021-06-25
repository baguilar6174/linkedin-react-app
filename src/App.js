import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
// Import components
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { getUserAuth } from './actions';
import { connect } from "react-redux";


function App(props) {

  useEffect(() => {
    props.getUserAuth();
  }, [props]);

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

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
