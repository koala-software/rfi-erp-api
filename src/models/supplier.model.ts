import mongoose from "mongoose";

export interface ISupplier extends mongoose.Document {
  name:string;
  code: string;
  contact_name: string;
  address_one: string;
  address_two: string;
  phone: string;
  email: string;
  lead_time: string;
}

const supplierSchema = new mongoose.Schema({
    name:String,
    code: String,
    contact_name: String,
    address_one: String,
    address_two: String,
    phone: String,
    email: String,
    lead_time: String,
});

export default mongoose.model<ISupplier>("Supplier", supplierSchema);
