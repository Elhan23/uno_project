import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './components/Product/Product';
import NavBar from './layout/base/NavBar/NavBar';
import Category from './components/Category/Category';
import Reviews from './components/Reviews/Reviews';
import GlobalProduct from './components/GlobalProduct/GlobalProduct';
import AppRouter from './router/AppRouter';
import Footer from './layout/base/Footer/Footer';

function App() {
  const location = useLocation();

  const hideComponents = location.pathname === '/login';

  return (
    <div>
      {!hideComponents && <NavBar />}
      {!hideComponents && <Category />}
      {!hideComponents && <GlobalProduct />}
      {!hideComponents && <Reviews />}
      {!hideComponents && <Product />}
      {!hideComponents && <Footer />}

      <AppRouter />
      
    </div>
  );
}

export default App;
