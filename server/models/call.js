import mongoose from "mongoose";

const callSchema = mongoose.Schema({
  phoneNumber: String,
  lastCall: {
    type: Date,
  },
});

const call = mongoose.model("call", callSchema);
export default call;
