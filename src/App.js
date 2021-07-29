import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
// import CardComponent from './components/CardsSection/Card';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
