import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Details from './components/Details';
import CardList from './components/CardList';
import NotFound from './components/NotFound';

function App() {
  return (
   <Router>
     <Navbar />
      <Switch>
       {/* <Route exact path = '/' component={CardList} /> */}
        {/* render a comp on a route with props in it  */}
       {/* <Route exact path="/" render={() => <CardList title="Related News"/>} /> */}
        {/* 2 komponenti na istata ruta so render metodot pod nego  */}
        <Route  exact path="/" render={() => (
             <>
                <CardList title="Latest News" />
                <CardList title="Related News" />
             </>
        )}/>

       <Route path ='/Blog' component={Blog}/>
       <Route path ='/Contact' component={Contact}/>
       <Route path ='/Details' component={Details} />
       <Route component={NotFound} />
      </Switch>
      <Footer />
   </Router>
  );
}
export default App;
