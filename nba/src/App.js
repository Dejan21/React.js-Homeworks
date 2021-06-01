import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InovationsForm from './component/InovationsForm';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Navbar  from './component/Navbar';
import ReactDOM from 'react-dom';
import HomePage from './component/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <InovationsForm />
      <Route exact path='/Navbar' component={Navbar} />
      <Route exact path='/HomePage' component={HomePage} />
      </Router>
      
    
    </div>
  );
}

export default App;
