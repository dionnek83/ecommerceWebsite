import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./components/header";
import Home from "./components/homepage";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Product from "./components/product";
import AllProducts from "./components/Products";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <AllProducts />
        </Route>
        <Route exact path="/:id">
          <Product />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
