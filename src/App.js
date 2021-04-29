import { Link, Route } from "wouter";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Details from "./pages/Details";

import StatiContext from "./context/StatiContext";
import { GifsContextProvider } from "./context/GifsContextProvider";

import "./App.css";

const App = () => {
  return (
    <StatiContext.Provider value={{ name: "test" }}>
      <div className='App'>
        <section className='App-content'>
          <Link to='/'>
            <figure className='App-logo'>
              <img src='/logo.png' alt='Giphy clone logo' />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path='/' />
            <Route component={SearchResult} path='/search/:keyword' />
            <Route component={Details} path='/gif/:id' />
          </GifsContextProvider>
        </section>
      </div>
    </StatiContext.Provider>
  );
};

export default App;
