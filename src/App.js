import Footer from 'components/Footer';
import Header from 'components/Header';
import ProductFeature from 'features/Product';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import CartFeature from './features/Cart';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" component={ProductFeature} exact />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
