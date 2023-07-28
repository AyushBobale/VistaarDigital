import mongoose from "mongoose";

const SingularTransactionSchema = new mongoose.Schema({
  date: { type: Date },
  amount: { type: Number },
  transaction_code: { type: String },
  symbol: { type: String },
  price: { type: mongoose.Types.Decimal128 },
  total: { type: mongoose.Types.Decimal128 },
});

const TransactionSchema = new mongoose.Schema({
  account_id: { type: Number },
  transaction_count: { type: Number },
  bucket_start_date: { type: Date },
  bucket_end_date: { type: Date },
  transactions: { type: [SingularTransactionSchema] },
});

const TransactionModel = mongoose.model("transaction", TransactionSchema);
export { TransactionModel };
