import Call from "../models/call.js";

export const createCall = async (req, res) => {
  console.log("createCall called in server Controllers");
  const call = req.body;

  const newCall = new Call({ ...call });
  console.log(newCall);

  try {
    await newCall.save();
    res
      .status(200)
      .json({ calls: newCall, message: "Call Created Successfully" });
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
export const getCalls = async (request, response) => {
  console.log("get Calls called");
  try {
    const calls = await Call.find();
    console.log(calls);
    response.send(calls);
  } catch (error) {
    response.status(404).json({ message: error });
  }
};
