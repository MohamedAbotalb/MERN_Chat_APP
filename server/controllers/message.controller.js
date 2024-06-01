import { io } from "../socket.js";

export const sendMessage = (req, res) => {
  const { message } = req.body;
  io.emit("message", message);
  console.log("message", message);
  res.send("success");
};
