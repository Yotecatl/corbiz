import './App.css';

//importando los components
import Header from './components/Header'
import Footer from './components/Footer';
import Suscripcion from './components/Suscripcion';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
     <Header />
     <ProductList />
     <Suscripcion />
     <Footer />
    </div>
  );
}

export default App;
