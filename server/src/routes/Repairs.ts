import { RepairController } from "../controllers/repairController";
import { Request, Response } from "express";
import * as mongoose from 'mongoose';
import { RepairSchema } from "../models/repairModel"

const Repair = mongoose.model('Repair', RepairSchema);
export class Repairs { 
    public repairController: RepairController = new RepairController();
    public routes(app): void { //received the express instance from app.ts file         
        app.route('/repair/:repairId')
          .get((req: Request, res: Response) => {            
              Repair.findOne({ 'repairId': req.params.repairId }, (err, repair) => {
                res.send(repair);
              })
          })

        app.route('/repair/').post(this.repairController.newRepair)
    }
}