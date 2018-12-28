import * as mongoose from 'mongoose';
import { RepairSchema } from '../models/repairModel';
import { Request, Response } from 'express';

const Repair = mongoose.model('Repair', RepairSchema);
export class RepairController {
  public newRepair (req: Request, res: Response) {                
    let newRepair = new Repair(req.body);
    
    newRepair.save((err, repair) => {
      if(err){
        res.send(err);
      }
      res.json(repair);
    });
  }
}
