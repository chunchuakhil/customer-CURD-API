import ICustomer from "../models/CustomerEntity";

export default interface ICustomerOperation{
    
    create(customer:ICustomer):Promise<void>;
    //update(id:number):Promise<void>;
    update(customer:ICustomer):Promise<void>;
    delete(id:number):Promise<void>;
    listAllCustomer(): Promise<void>;
}