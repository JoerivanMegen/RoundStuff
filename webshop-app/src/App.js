import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import SignUp from './components/SignUp'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import LogIn from './components/LogIn'
import ForgotPassword from './components/ForgotPassword';
import ProductOverview from './components/ProductOverview';
import ProductDetail from './components/ProductDetail';
import { useState } from 'react';
import Basket from './components/Basket';
 
function App() {
  const [basketItems, setBasketItems] = useState([]);
  const onAdd = (product) => {
    const exist = basketItems.find((item) => item.id === product.id);
    if(exist) {
      setBasketItems(
        basketItems.map((item) => 
          item.id === product.id ? {...exist, qty: exist.qty +1} : item
        )
      );
    }  else {
      setBasketItems([...basketItems, {...product, qty: 1}]);
    }
  };
  const onRemove = (product) => {
    const exist = basketItems.find((item) => item.id === product.id);
    if(exist.qty === 1){
      setBasketItems(basketItems.filter((item) => item.id !== product.id));
    } else {
      setBasketItems(basketItems.map((item) => item.id === product.id ? {...exist, qty: exist.qty - 1} : item
        )
      );
    }
  }
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Navbar countBasketItems={basketItems.length} />
            <Route path="/" exact component={Homepage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={LogIn} />
          </Switch>

          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/shop/:type_name" exact render={(props) => (<ProductOverview {...props} onAdd={onAdd} />)} />
            <Route path="/shop/:type_name/:product_name" exact render={(props) => (<ProductDetail {...props} onAdd={onAdd} />)} />
            <Route path="/basket" exact render={(props) => (<Basket {...props} basketItems={basketItems} onRemove={onRemove} onAdd={onAdd} />)} />
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
              <div className="w-100" style={{ maxWidth: '400px' }}>
                <Route path="/signup" exact component={SignUp} />
                <Route path="/login" exact component={LogIn} />
                <Route path="/forgot-password" exact component={ForgotPassword} />
              </div>
            </Container>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
