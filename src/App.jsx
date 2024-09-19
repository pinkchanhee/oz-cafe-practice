import { CartProvider } from './context/cartContext';
import { MenuProvider } from './context/menuContext';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <CartProvider>
      <MenuProvider>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </MenuProvider>
    </CartProvider>
  );
}

export default App;