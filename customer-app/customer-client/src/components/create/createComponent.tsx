import React from "react";
import App from "../../App";
import Service from "../../services/service";
import data from "./../delete/delete";
export default class CreateComponent extends React.Component<any, any> {
  serObj = new Service();
  constructor(props: any) {
    super(props);
    this.state = {
      customer: {
        id: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        eMail: ""
      }
    };
  }
  updateCustomer = (event: any) => {
    event.preventDefault();
    this.serObj
      .add(this.state.customer)
      .then((res: any) => {
        console.log("response rec--->", res);
      })
      .catch((error: any) => {
        console.log("error rec--->", error);
      });
    this.props.history.push("/");
  };

  goToHome() {
    this.props.history.push("/");
    window.location.reload(true);
  }

  handleChange = ({ target }: any) => {
    const { customer } = this.state;
    let newCustomer = { ...customer };
    newCustomer[target.name] = target.value;
    // console.log("Customer---> ", customer);
    // console.log("newCustomer---> ", newCustomer);
    console.log("target---> ", this.state.customer);
    // console.log("taget.name-->", target.name);
    // console.log("taget.value-->", target.value);

    this.setState({ customer: newCustomer });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.goToHome()}>Home</button>
        <form action="" method="POST">
          <label htmlFor="id">ID</label>
          <input
            type="number"
            name="id"
            value={this.state.customer.id}
            onChange={this.handleChange}
          />

          <label htmlFor="firstName">first name</label>
          <input
            type="text"
            name="firstName"
            value={this.state.customer.firstName}
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">last name</label>
          <input
            type="text"
            name="lastName"
            value={this.state.customer.lastName}
            onChange={this.handleChange}
          />

          <label htmlFor="phoneNumber">phone number</label>
          <input
            type="text"
            name="phoneNumber"
            value={this.state.customer.phoneNumber}
            onChange={this.handleChange}
          />

          <label htmlFor="eMail">eMail</label>
          <input
            type="text"
            name="eMail"
            value={this.state.customer.eMail}
            onChange={this.handleChange}
          />

          <input
            type="submit"
            value="submit"
            onClick={this.updateCustomer}
          ></input>
        </form>
      </React.Fragment>
    );
  }
}
