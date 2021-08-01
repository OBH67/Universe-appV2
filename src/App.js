import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Home exact path='/' component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
