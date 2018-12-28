import * as mongoose from 'mongoose';
import { RepairSchema } from '../models/repairModel';
import { Request, Response } from 'express';

const Repair = mongoose.model('Contact', RepairSchema);
export class ContactController{
  public newRepair (req: Request, res: Response) {                
    let newRepair = new Repair(req.body);
    
      newRepair.save((err, contact) => {
        if(err){
          res.send(err);
        }    
        res.json(contact);
      });
    }
  }
