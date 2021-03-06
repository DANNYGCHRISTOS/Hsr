import React, { Component } from "react";
import ReactDOM from "react-dom";
import routes from "./routes";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Header />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
