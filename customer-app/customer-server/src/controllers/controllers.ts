import CustomerImpl from "../service/CustomerImpl";



export class  Controller{
	custObj=new CustomerImpl();
	constructor(){
		console.log("insdide controller constructor");
	}
    async addCustomer(request, response) {
		console.log("inside addCustomer-ctrl");
		
		try {
			if(request?.payload){
				//console.log(request.payload);
				return  await this.custObj.create(request.payload); 
			}else{throw Error}
		} catch (error) {
			console.log("error inside addCustomer constroller",error);
			return false;
		}
	}

	async updateCustomer(request, response) {
		//var id=request.params.id;
		console.log("inside update");
		try{
			return await this.custObj.update(request.payload);
		}catch(error){
			console.log("error inside updateCustomer controller",error);
			return false;			
		}
	}

	async deleteCustomer(request, response) {
		var id=request.params.id;
		console.log("inside delete");
		try {
			return await this.custObj.delete(id)
		} catch (error) {	
			console.log("error inside deleteCustomer controller",error);
			return false;			
		}		
	}
	
	 listAllCustomer(request, response) {
		 console.log("inside list");
		 try {
			return	this.custObj.listAllCustomer()
		 } catch (error) {
			console.log("error inside listAllCustomer controller",error);
			 return false;
		 }
		 
	}

}

