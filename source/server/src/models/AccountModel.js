import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  account_id: { type: Number },
  limit: { type: Number },
  products: { type: [String] },
});

const AccountModel = mongoose.model("account", AccountSchema);

export { AccountModel };
