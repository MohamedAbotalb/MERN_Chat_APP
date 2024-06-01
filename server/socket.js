import { Server } from "socket.io";

const port = 8080;

export const io = new Server(8080, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket) => {
  console.log(`Connect with ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Disconnected with ${socket.id}`);
  });

  socket.on("message", (msg) => {
    console.log(`Message: ${msg}`);
  });
});

// Log server start
console.log(`Socket.IO server running at http://localhost:${port}/`);
