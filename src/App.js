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
          <Route exact path="/" component={AppHome} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={SingleProduct} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
