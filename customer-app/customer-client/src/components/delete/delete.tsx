import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";
import Service from "../../services/service";
export default class DeleteCustomerComponent extends React.Component<any, any> {
  serObj = new Service();
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div>deleted</div>;
  }
}
