import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg';
import GroceryList from './GroceryList';

function App() {
  return (
    <div>
    <div className='App'>
    <div className="Conteiner">
      <img src={ image } width="200px" alt="shopping"/>
    </div>   
      <div className="Conteiner">
        <h1>Grocery List</h1>
      </div>
        <GroceryList/>
      <div className="Conteiner">
        <img src={ imageTwo } width="200px" alt="man"/>
      </div>
    </div>
    </div>
  );
}

export default App;