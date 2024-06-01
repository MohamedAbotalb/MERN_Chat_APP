import { Server } from "socket.io";

const port = 8080;

const io = new Server(8080, {
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
});

// Log server start
console.log(`Socket.IO server running at http://localhost:${port}/`);
