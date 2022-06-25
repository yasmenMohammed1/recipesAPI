import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  ip: String,
  time: Date
});
export const IpModel = mongoose.model('ips', schema);
export interface Ips {
  _id: mongoose.Types.ObjectId;
  ip: string;
  // ingrediants: { name: string; quantity: string }[];
}
