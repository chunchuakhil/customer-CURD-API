import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";
import Service from "../../services/service";
export default class EnterId extends React.Component<any, any> {
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

  //   componentDidMount() {
  //     this.serObj
  //       .list()
  //       .then((res: any) => {
  //         console.log("response rec--->", res);
  //         this.setState({ data: res.data });
  //       })
  //       .catch((error: any) => {
  //         console.log("error rec--->", error);
  //       });
  //   }

  handleChange = ({ target }: any) => {
    const { customer } = this.state;
    let newCustomer = { ...customer };
    newCustomer[target.name] = target.value;
    console.log("target---> ", this.state.customer);
    this.setState({ customer: newCustomer });
    console.log("customer---> ", customer);
    // this.props.history.push("/editCustomerDetails", {
    //   customer: newCustomer
    // });
  };

  //   editCustomer(customer: any) {
  //     console.log("customer is --->", customer);
  //     this.props.history.push("/editCustomerDetails", {
  //       customer: customer
  //     });
  //   }

  editCust(customer: any) {
    // this.serObj.list();
    this.serObj.update(customer);
    console.log("customer--->", customer);
    this.props.history.push("/editCustomerDetails", {
      customer: customer
    });
  }

  render() {
    // const customers = this.state.customer((customer: any, index: any) => {
    //   return (
    //     <tr key={customer.id}>
    //       <td>{customer.id}</td>
    //       <td>{customer.firstName}</td>
    //       <td>{customer.lastName}</td>
    //       <td>{customer.eMail}</td>
    //       <td>{customer.phoneNumber}</td>
    //       {/* <td>
    //         <button onClick={() => this.editCust(customer)}>EDIT</button>
    //       </td> */}
    //     </tr>
    //   );
    // });
    return (
      <div>
        <form action="" method="PUT">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            value={this.state.customer.id}
            onChange={this.handleChange}
          />

          <input
            type="submit"
            value="submit"
            onClick={() => this.editCust(this.state.customer)}
          ></input>
        </form>
      </div>
    );
  }
}
