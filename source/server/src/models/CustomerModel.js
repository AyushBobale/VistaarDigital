import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  username: { type: String },
  name: { type: String },
  address: { type: String },
  birthdate: { type: Date },
  email: { type: String },
  accounts: { type: [Number] },
  tier_and_details: {
    type: {
      [String]: {
        tier: { type: String },
        id: { type: mongoose.Types.ObjectId },
        active: { type: Boolean },
        benefits: { type: [String] },
      },
    },
  },
});

const CustomerModel = mongoose.model("customer", CustomerSchema);
export { CustomerModel };
