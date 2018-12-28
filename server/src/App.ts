import * as express from 'express';
import * as bodyParser from 'body-parser'; //used to parse the form data that you pass in the request
import { Repairs } from "./routes/Repairs";
import * as mongoose from 'mongoose';

class App {
    public app: express.Application;
    public repairs: Repairs = new Repairs();

    constructor() {
        this.app = express(); //run the express instance and store in app
        this.config();
        mongoose.connect('mongodb://localhost/sdrdb');
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        this.repairs.routes(this.app); 
    }
}

export default new App().app;