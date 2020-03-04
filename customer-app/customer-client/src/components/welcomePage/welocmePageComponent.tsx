import React from "react";
import { Link } from "react-router-dom";

export default class WelcomePageComponent extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <ul style={{ paddingTop: "10px" }}>
          <li>
            <Link to="/createCustomer">Create customer </Link>
          </li>
          {/* <li>
            <Link to="/editCustomerDetails">Edit customer Details</Link>
          </li> */}
          {/* <li>
            <Link to="/enterId">Edit</Link>
          </li> */}
          <li>
            <Link to="/displayCustomers">List of Customers</Link>
          </li>
          {/* <li>
            <Link to="/deleteCustomer">Delete customer</Link>
          </li> */}
        </ul>
      </React.Fragment>
    );
  }
}
