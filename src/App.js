import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import AppHome from "./views/Home";
import SingleProduct from "./views/SingleProduct";
import Cart from "./views/Cart";

import "./styles/utilities.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AppHome />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/product">
            <SingleProduct />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
