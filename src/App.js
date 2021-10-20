import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
            <Route exact path = "/">
              <HomePage/>
            </Route>
            <Route path="/details/:id">
              <DetailsPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
