import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Switch>
          <Route path="/" component={ProductListing}></Route>
          <Route path="/product/:productId" component={ProductDetails}></Route>
          <Route>404 Page not Found!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
