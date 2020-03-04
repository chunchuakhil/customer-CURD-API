import CustSchema from "./custSchema";

const mongoose=require('mongoose');

export default class Connection{
        static connectionToDB=null;
        async connectToDB(){
                try {
                        Connection.connectionToDB=await mongoose.connect('mongodb://localhost:27017/customer',
                        {useNewUrlParser:true,useUnifiedTopology:true}
                        );
                        //console.log("Connection.connectionToDB",Connection.connectionToDB);
                        console.log("connected to DB....");
                        
                        if(Connection.connectionToDB)return true; else return false;
                } catch (error) {
                        console.log("error inside conncet",error);
                }  
        }
        async closeDBConnection(){
                try {
                        Connection.connectionToDB?.close();
                        Connection.connectionToDB=null;
                } catch (error) {
                        console.log("error inside closeDBConnection",error);
                }  
        }

       
}