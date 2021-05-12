
import './App.css';
import Navbar from './components/Navbar/index.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Home from './pages/index.js';
import FindJob from './pages/findjob';
import CreateCV from './pages/createcv';
import About from './pages/about';
import LogIn from './pages/login';
import Register from './pages/register.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/findj' exact component={FindJob} />
        <Route path='/createcv' exact component={CreateCV} />
        <Route path='/about' exact component={About} />
        <Route path='/login' exact component={LogIn} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
    

  );
}

export default App;
