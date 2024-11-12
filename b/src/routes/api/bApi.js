"use strict";
import { Server } from "socket.io";

import { deleteImage } from "../../utils/bHelpers.js";

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

class IoEvents {
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

export const eventList = new IoEvents();

class DataHandler {
  /**
   * @method
   */
  constructor() {}
  static isFound(rs, data, mess, rule) {
    return rs.status(200).send({ data, "fx=": mess, "rule=": rule });
  }
  static ifError(rq, rs, error, mess, rule) {
    console.log(error, `${error.message} fx=${mess}, rule=${rule}`);
    deleteImage(rq.file?.path, mess, rule);
    return rs.status(500).send(`${error.message} fx=${mess}, rule=${rule}`);
  }
}

export default class BApi {
  /**
   * @method
   */
  constructor() {}

  static async simpleGetAll(rq, rs, model, mess) {
    return BApi.simpleReq(rq, rs, model.find(), mess, "simpleGetAll");
  }

  static async simpleGetAllLocal(rq, rs, model, mess) {
    return BApi.simpleReq(rq, rs, model, mess, "simpleGetLocal");
  }

  static async simpleGetOne(rq, rs, model, mess) {
    const { id } = rq.params;
    return BApi.simpleReq(rq, rs, model.findById(id), mess, "simpleGetOne");
  }

  static async simpleReq(rq, rs, promise, mess, rule) {
    try {
      const data = await promise;
      eventList.addEvent(mess);
      console.log(eventList.getEvents());
      return DataHandler.isFound(rs, data, mess, rule);
    } catch (error) {
      return DataHandler.ifError(rq, rs, error, mess, rule);
    }
  }
}
