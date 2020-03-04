import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CreateComponent from "./components/create/createComponent";
import EditCustomerComponent from "./components/edit/editDetails";
import ListCustomerComponent from "./components/list/listCustomers";
import DeleteCustomerComponent from "./components/delete/delete";
import EnterId from "./components/edit/enterid";
import Table from "./components/table/table";
import WelcomePageComponent from "./components/welcomePage/welocmePageComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={WelcomePageComponent} />

            <Route exact path="/createCustomer" component={CreateComponent} />
            <Route
              path="/editCustomerDetails"
              component={EditCustomerComponent}
            />
            {/* <Route path="/enterId" component={EnterId} /> */}
            <Route path="/displayCustomers" component={ListCustomerComponent} />
            <Route path="/deleteCustomer" component={DeleteCustomerComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}
