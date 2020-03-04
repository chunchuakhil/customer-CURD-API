import React from "react";
import App from "../../App";
import Service from "../../services/service";
//import Table1 from "./table1";
export default class Table extends React.Component<any, any> {
  render() {
    const greeting = {
      subject: "Customer page",
      desc: "All details of cust"
    };
    return (
      <div>
        <Table1 greetings={greeting} />
      </div>
    );
  }
}

class Table1 extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Title title={`Welcome to ${this.props.greetings.subject}`} />
        <Description description={this.props.greetings.desc} />
      </div>
    );
  }
}

class Title extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class Description extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
