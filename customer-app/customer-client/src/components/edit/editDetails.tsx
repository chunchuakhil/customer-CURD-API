import React from "react";
import Service from "../../services/service";
export default class EditCustomerComponent extends React.Component<any, any> {
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

  componentDidMount() {
    console.log("this.props--->", this.props);

    const customer = this.props?.location?.state?.customer;
    console.log("customer", customer);
    this.setState({ customer: customer });
  }

  updateCustomer = (event: any) => {
    event.preventDefault();
    console.log("this.state-->", this.state);
    this.serObj
      .update(this.state.customer)
      .then((res: any) => {
        console.log("response rec--->", res);
      })
      .catch((error: any) => {
        console.log("error rec--->", error);
      });
    this.props.history.push("/displayCustomers");
    window.location.reload(true);
  };

  handleChange = ({ target }: any) => {
    const { customer } = this.state;
    let newCustomer = { ...customer };
    newCustomer[target.name] = target.value;
    console.log("target---> ", this.state.customer);
    this.setState({ customer: newCustomer });
  };

  render() {
    return (
      <React.Fragment>
        <form action="" method="PUT">
          {/* <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            value={this.state.customer.id}
            onChange={this.handleChange}
          /> */}

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
