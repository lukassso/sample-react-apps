import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";
import {INCREASE, DECREASE} from './actions';
import reducer from './reducer'; 

// store.getState

// initial store

const initialStore = {
  count: 0,
  name: "name",
};

const store = createStore(reducer, initialStore);
console.log(store);
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });

store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
// console.log(store.getState());

function App() {

  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
