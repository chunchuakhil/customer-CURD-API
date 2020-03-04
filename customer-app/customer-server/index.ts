import Routes from "./src/routes/routes";

import { Controller } from "./src/controllers/controllers";
import Connection from "./src/dao/connection";
import CustSchema from "./src/dao/custSchema";
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const Hapi = require('hapi');
const server = Hapi.server({
    port: 3000,
    host: '10.57.18.47', "routes": { "cors": true }
});

async function dbConfig() {
    var con = new Connection();
    await con.connectToDB();
    //console.log(Connection.connectionToDB);
}
async function schemaConfig() {
    var sch = new CustSchema();
    await sch.createCustomerSchema();
}

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at.....>:', server.info.uri);
    await dbConfig();
    await schemaConfig();

};
start();




server.route({
    method: 'GET',
    path: "/",
    handler: function (req: any, res: any) {
        console.log("here");

        return "WelcomePage"
    }
});
server.route({
    method: 'POST',
    path: Routes.addCustomer,
    handler: function (req, res) {
        const ctrlObj = new Controller();
        return ctrlObj.addCustomer(req, res)
    }
});

server.route({
    method: 'PUT',
    path: Routes.updateCustomer,
    handler: function (req, res) {
        const ctrlObj = new Controller();
        return ctrlObj.updateCustomer(req, res)
    }
});

server.route({
    method: 'DELETE',
    path: Routes.deleteCustomer,
    handler: function (req, res) {
        const ctrlObj = new Controller();
        return ctrlObj.deleteCustomer(req, res)
    }
});
server.route({
    method: 'GET',
    path: Routes.listAllCustomer,
    handler: function (req, res) {
        const ctrlObj = new Controller();
        return ctrlObj.listAllCustomer(req, res)
    }
});




process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});