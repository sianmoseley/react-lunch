import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">LUNCH APP</Link>
              <Link to="/admin">ADMIN</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>Built by Sian.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
