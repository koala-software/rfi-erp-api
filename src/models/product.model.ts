import mongoose from "mongoose";

interface Product_Container {
  batch_code: string;
  on_hand: number;
  in_transit: number;
  on_order: number;
  allocated: number;
}

export interface IProduct {
  code: string;
  name: string;
  cost: number;
  stock?: [Product_Container];
  customers: [string];
  status: number;
  fda_status?: number;
  cpl_hazard?: string;
  fema_number?: number;
  ttb_status?: string;
  eu_status?: number;
  organic?: boolean;
  kosher?: boolean;
}

const productSchema = new mongoose.Schema({
  code: String,
  name: String,
  cost: Number,
  stock: [
    {
      batch_code: String,
      on_hand: Number,
      in_transit: Number,
      on_order: Number,
      allocated: Number,
    },
  ],
  customers: [String],
  status: Number,
  fda_status: Number,
  cpl_hazard: String,
  fema_number: Number,
  ttb_status: String,
  eu_status: Number,
  organic: Boolean,
  kosher: Boolean,
});

export default mongoose.model<IProduct>("Product", productSchema);