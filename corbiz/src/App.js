import logo from './logo.svg';
import './App.css';

//importando los components
import Header from './components/Header'
import Product from './components/Product';


function App() {
  return (
    <div className="App">
     <Header />
     <Product />
    </div>
  );
}

export default App;
