import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import NotFound  from './components/NotFound';
import FAQ from './components/FAQ';

function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
     <Route exact path='/' render ={() => (
         <>
         <FAQ text ='question' />
         <FAQ text ='answer' />
         </>
       )}/>
       <Route exact path='/Home' component={Home} />
       <Route path='/About' component={About} />
       <Route path='/Auth' component={Auth} />
       <Route path='/Navbar' component={Navbar}/>
       
       <Route component={NotFound} />
     </Switch>
   </Router>
  );
}

export default App;
