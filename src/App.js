import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "../src/templates/Default";
import { Page } from "../src/templates/Page";
import { CustomerList } from "./pages/List";
import { CustomerRegister } from "./pages/Register";

function App() {
  return (
    <Router>
      <Default>
        <Switch>
          <Route exact path="/customer/add">
            <Page title="Clientes" Component={CustomerRegister} />
          </Route>
          <Route exact path="/">
            <Page title="Home" Component={Home} />
          </Route>
          <Route exact path="/customer">
            <Page title="Clientes" Component={CustomerList} />
          </Route>
        </Switch>
      </Default>
    </Router>
  );
}

export default App;
