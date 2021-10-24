import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Router>
          <Header className='header'/>
          <Switch>
            <Route exact path = "/">
              <HomePage className='homepage'/>
            </Route>
            <Route path="/details/:type/:id">
              <DetailsPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
