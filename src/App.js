import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";


export default function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/Cart">View Cart</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

//list of all products
function Products() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Products for Engineers</h2>

      <ul>
        <li>
          <Link to={`${match.url}/Rubber-Ducky`}>Rubber Ducky</Link>
        </li>
        <li>
          <Link to={`${match.url}/Tylenol`}>
            Tylenol 
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/A-Good-Chair`}>
            A good chair 
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

//here are your products
function Product(item) {
  let { productId } = useParams();

  return (
    <div>
      <h3>Hey you chose {productId}!</h3>
      <p>I'll work on getting that in your cart</p>
      <p>You'll need {productId} ASAP</p>
    </div>
  )
}


function Cart() {
  return (
    <div>
      <h2>Cart</h2>
      <button>If you are ready to leave click me!</button>
    </div>
  )
}