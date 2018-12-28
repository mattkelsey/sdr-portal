import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RepairSchema = new Schema({
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: { // one or the other required
      type: String
    },
    phone: { // one or the other required
      type: String
    },
    repairId: {
      type: Number
    },
    recievedDate: {
      type: Date
    },
    model: {
      type: String
    },
    description: {
      type: String
    },
    notes: { // internal use only, not exposed to clients.. optional
      type: String,
    },
    priority: { // 0-2 scale
      type: Number,
      default: 0
    },
    incomingPostalNumber: { // optional
      type: String
    },
    outgoingPostalNumber: { // optional
      type: String
    },
    status: {
      type: Number, // number indicating status
      default: 0
    },
    hasPayed: { // read-only to clients
      type: Boolean,
      default: false
    }
});