import ICustomer from "../models/CustomerEntity";
import ICustomerOperation from "../interfaces/ICustomerOperation"
import db from "../dao/db";
export default class CustomerImpl implements ICustomerOperation {
    dbObj = null;
    constructor() {
        this.dbObj = new db();
    }
    async create(customer: ICustomer): Promise<void> {
        //console.log(customer);
        try {
            return await this.dbObj.createUser(customer);
        } catch (error) {
            console.log("error inside....create Impl", error);
        }
    }
    async update(customer: ICustomer): Promise<void> {
        try {
            return await this.dbObj.updateUser(customer);
        } catch (error) {
            console.log("error inside....update Impl", error);
        }

    }
    async delete(id: number): Promise<void> {
        try {
            return await this.dbObj.deleteUser(id);
        } catch (error) {
            console.log("error inside ....delete Impl", error);
        }
    }
    async listAllCustomer(): Promise<void> {
        try {
            return await this.dbObj.listAllUser()
        } catch (error) {
            console.log("error inside...listAll Imple", error);
        }
    }
}