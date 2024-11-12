import { Server } from "socket.io";

export function socketServer(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  //second happening, sending data back to FE
  io.on("connection", (socket) => {
    eventList.getEvents().forEach((event) => {
      console.log(eventList.getEvents() + "IO");

      const { f2b, b2f } = { f2b: `${event}F2B`, b2f: `${event}B2F` };
      socket.on(f2b, (data) => {
        try {
          io.emit(b2f, data);
        } catch (error) {
          console.error(`Error emitting event ${b2f}: ${error}`);
        }
      });
    });
  });
}

class Events {
  constructor() {
    this.events = new Set();
  }
  addEvent(event) {
    this.events.add(event);
  }
  getEvents() {
    return [...new Set(this.events)];
  }
}

export const eventList = new Events();
