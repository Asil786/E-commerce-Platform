import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselContainer from './component/Carousel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KNGocSCTgrJaWLI53c6aUteYW4XSMzr9qenIjZvAjNt8tuzc5Bu7aXFJktlbAi9S8c06iNOoc6NLAPz0JdFmBVL00XI7jZ2gH');

function App() {
  const [{}, dispatch] = useStateValue();     // Destructuring

  useEffect(() =>{
    // will only run once when app component is Loaded.
    auth.onAuthStateChanged(
      authUser => {
        console.log('The User Is : ', authUser);
      if (authUser) {
        // User Just Logged In OR User was Logged In
        dispatch(
          {
            type: 'SET_USER',
            user: authUser            
          }
        );
      }
      else{
        // User Logged Out
        dispatch(
          {
            type: 'SET_USER',
            user: null
          }
        )
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
               <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <CarouselContainer />
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;