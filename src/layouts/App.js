import React from 'react';
import '../styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

class App extends React.Component {
  state = {  }
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation/>}
            </aside>
            <section className="page">
              {<Page/>}
            </section>
          </main>
          <footer>
            {<Footer/>}
          </footer>
        </div>
      </BrowserRouter>
     );
  }
}

export default App;