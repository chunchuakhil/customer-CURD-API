import React from "react";
import Service from "../../services/service";
export default class ListCustomerComponent extends React.Component<any, any> {
  serObj = new Service();

  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.serObj
      .list()
      .then((res: any) => {
        console.log("response rec--->", res);
        this.setState({ data: res.data });
      })
      .catch((error: any) => {
        console.log("error rec--->", error);
      });
  }
  selectedCustomer(customer: any) {
    console.log("selected customer is --->", customer);
    this.props.history.push("/editCustomerDetails", { customer: customer });
  }

  deleteCust(customer: any) {
    this.serObj.delete(customer.id);
    console.log("customer--->", customer);

    this.props.history.push("/displayCustomers");
    window.location.reload(true);
  }

  goToHome() {
    this.props.history.push("/");
    window.location.reload(true);
  }

  render() {
    const customers = this.state.data.map((customer: any, index: any) => {
      return (
        <tr key={customer.id}>
          <td onClick={() => this.selectedCustomer(customer)}>{customer.id}</td>
          <td onClick={() => this.selectedCustomer(customer)}>
            {customer.firstName}
          </td>
          <td onClick={() => this.selectedCustomer(customer)}>
            {customer.lastName}
          </td>
          <td onClick={() => this.selectedCustomer(customer)}>
            {customer.eMail}
          </td>
          <td onClick={() => this.selectedCustomer(customer)}>
            {customer.phoneNumber}
          </td>
          <td>
            <button onClick={() => this.deleteCust(customer)}>Delete</button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <button onClick={() => this.goToHome()}>Home</button>
        <h2 id="title">Customers</h2>

        <table id="data">
          <tbody>{customers}</tbody>
        </table>
      </div>
    );
  }
}
