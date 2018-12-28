
import {Request, Response} from "express";
export class Repairs { 
    public routes(app): void { //received the express instance from app.ts file         
        app.route('/repair/:repairId')
        .get((req: Request, res: Response) => {            
            res.status(200).send("yeet");
        })
    }
}