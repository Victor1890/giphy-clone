import { Link, Route } from "wouter";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Details from "./pages/Details";

import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <figure className='App-logo'>
            <img src='/logo.png' alt='Giphy clone logo' />
          </figure>
        </Link>
        <Route component={Home} path='/' />
        <Route component={SearchResult} path='/search/:keyword' />
        <Route component={Details} path='/gif/:id' />
      </section>
    </div>
  );
};

export default App;
