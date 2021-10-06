import logo from './logo.svg';
import './App.css';
import MyFunctionalComp from './components/MyFunctionalComp';
import MyClassComp from './components/MyClassComp';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import DiceRoll from './components/DiceRoll';
import ContactCard from './components/ContactCard';
function App() {
  return (
    <div className="App">
     {/* <MyFunctionalComp /> */}
     {/* <MyClassComp /> */}
     {/* <Counter /> */}
     {/* <DiceRoll /> */}
     <ContactCard />
    </div>
  );
}

export default App;
