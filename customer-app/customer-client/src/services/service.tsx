import { Constants } from "../constants/constant";

const axios = require("axios");
export default class Service {
  public async add(requestOptions: any) {
    const url = Constants.serverPath + "/addCustomer";
    return await axios.post(url, requestOptions);
  }

  public async update(requestOptions: any) {
    const url = Constants.serverPath + "/updateCustomer";
    console.log("requestOptions-->", requestOptions);
    console.log("requestOptions.id-->", requestOptions.id);
    return await axios.put(url, requestOptions);
  }

  public async delete(customerId: any) {
    const url = Constants.serverPath + "/deleteCustomer/" + customerId;
    console.log("customerId-->", customerId);
    console.log("customerId.id-->", customerId.id);
    return await axios.delete(url);
  }
  public async list() {
    const url = Constants.serverPath + "/listAllCustomer";
    return await axios.get(url);
  }

  // public async updateWithId(){
  //   const url = Constants.serverPath + "/deleteCustomer";
  // }
}
