import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "../src/templates/Default";
import { Page } from "../src/templates/Page";
import { CustomerList } from "./pages/List";
import { CustomerRegister } from "./pages/Register";
import { CustomerRegisterEdit } from "./components/CustomersEdit";
import { Login } from "./pages/Login";
import { Clean } from "./templates/Clean";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Clean title="Acesso restrito" Component={Login} />
        </Route>
        <Default>
          <Route exact path="/customer/edit/:id">
            <Page title="Clientes" Component={CustomerRegisterEdit} />
          </Route>
          <Route exact path="/customer/add">
            <Page title="Clientes" Component={CustomerRegister} />
          </Route>
          <Route exact path="/">
            <Page title="Home" Component={Home} />
          </Route>
          <Route exact path="/customer">
            <Page title="Clientes" Component={CustomerList} />
          </Route>
        </Default>
      </Switch>
    </Router>
  );
}

export default App;
