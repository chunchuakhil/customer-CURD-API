const mongoose=require('mongoose');
import Connection from "./connection";
export default class CustSchema{
    static customerModel;

    async createCustomerSchema(){
        
        const customerSchema=Connection.connectionToDB.Schema({
                id:{type:Number,unique:true,required:true},
                firstName:{type:String,required:true},
                lastName:String,
                eMail:String,
                phoneNumber:Number
            })
        
        
        try {
            CustSchema.customerModel=await Connection.connectionToDB.model('customer58',customerSchema)
            console.log( CustSchema.customerModel);
            
            console.log("Model is created....");
            if(CustSchema.customerModel)return true; else return false;
        } catch (error) {
            console.log("error inside model-creation:",error);
        
        }
       
    }

}