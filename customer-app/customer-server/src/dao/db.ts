import ICustomer from "../models/CustomerEntity";
import CustSchema from "./custSchema";
import con from "../dao/connection";
// import ICustomer from "../models/CustomerEntity";
// const mongoose=require('mongoose');

export default class db {
    constructor() {

    }
    //create use////////////
    async createUser(customer: ICustomer) {
        let value = null;
        try {
            //new this.customerModel(customer).save();
            //console.log( "calling back",CustSchema.customerModel);
            value = await CustSchema.customerModel(customer).save();
            console.log("cust is created......\n", value);
            if (value) return true; else return false;
        }
        catch (error) {
            console.log("error inside createUser-db ", error);
            return false;
        }
    };
    //user update//////////////////////
    async updateUser(customer: ICustomer) {
        let value = null;
        const cId = customer.id;

        try {
            let oldData = await CustSchema.customerModel.findOne({ id: cId });
            console.log("oldData......", oldData);

            value = await CustSchema.customerModel.updateOne(oldData, customer);
            console.log("update is done.....\n", value);
            if (value) return value; else return false;
        } catch (err) {
            console.log("error inside updateUser-db", err);
            return false;
        }
    };
    // //user Delete///////////////
    async deleteUser(uId) {
        let value = null;
        try {
            value = await CustSchema.customerModel.findOneAndDelete({ id: uId });
            console.log("deletion is done..for....\n", value);
            if (value) return true; else return false;
        } catch (error) {
            console.log("error inside deleteUser-db", error);
            return false;
        }
    };
    // // List all users////////////////
    async listAllUser() {
        let value = null;
        try {
            value = await CustSchema.customerModel.find().sort({ id: 1 });
            console.log("list is displaying.........\n", value);
            if (value) return value; else return false;
        } catch (err) {
            console.log("error inside listAllUser-db", err);
            return false;
        }
    };

}
