"use strict";
import { Server } from "socket.io";
import bcrypt from "bcryptjs";
import Joi from "joi";

import { deleteImage, fileUrl } from "../../utils/bHelpers.js";
import { imgLoc } from "../../utils/multer.js";
import { server } from "../../../app.js";

export function socketServer(socketServe) {
  if (socketServe === server) {
    const io = new Server(socketServe, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    //second happening, sending data back to FE
    io.on("connection", (socket) => {
      const events = eventList.getEvents();
      for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const { f2b, b2f } = { f2b: `${event}F2B`, b2f: `${event}B2F` };
        console.log(f2b, b2f);
        socket.on(f2b, (data) => {
          try {
            io.emit(b2f, data);
          } catch (error) {
            console.error(`Error emitting event ${b2f}: ${error}`);
          }
        });
      }
    });
    return;
  }
  throw new Error("SocketServer Params Problem");
}

class IoEvents {
  constructor() {
    this.events = new Set();
  }
  addEvent(event) {
    const schema = Joi.object({
      event: Joi.string().required(),
    });
    const result = schema.validate({ event });
    if (result.error) {
      throw new TypeError(result.error.message);
    }
    return this.events.add(event);
  }
  getEvents() {
    return [...new Set(this.events)];
  }
}

const eventList = new IoEvents();

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

  static conflict(rs, duplicate, mess, rule) {
    return rs
      .status(409)
      .send(
        `Duplicate Item exist: "${duplicate}", fx=: ${mess}, rule=: ${rule}`
      );
  }

  static dataNotFound(rq, rs, mess, rule) {
    deleteImage(rq.file?.path, mess, rule);
    return rs
      .status(404)
      .send(`${mess} data not found, fx=${mess}, rule=${rule}`);
  }

  static duplicatedEmail(rq, rs, mess, rule, email) {
    deleteImage(rq.file?.path, mess, rule);
    return DataHandler.conflict(rs, email, mess, rule);
  }

  static delPrevImg(location, user, mess, rule) {
    const imageUrl = user.image.substring(user.image.lastIndexOf("/") + 1);
    deleteImage(imgLoc(location) + "/" + imageUrl, mess, rule);
  }
}

export default class BApi {
  /**
   * @method
   */
  constructor() {}

  static async simpleGetAll(rq, rs, model, mess) {
    return BApi._simpleReq(rq, rs, model.find(), mess, "simpleGetAll");
  }

  static async simpleGetAllLocal(rq, rs, model, mess) {
    return BApi._simpleReq(rq, rs, model, mess, "simpleGetLocal");
  }

  static async simpleGetOne(rq, rs, model, mess) {
    const { id } = rq.params;
    return BApi._simpleReq(rq, rs, model.findById(id), mess, "simpleGetOne");
  }

  static async simpleGetGroup(rq, rs, model, mess) {
    const { id } = rq.params;
    return BApi._simpleReq(
      rq,
      rs,
      model.find({ groupId: { $in: id } }),
      mess,
      "simpleGetOne"
    );
  }

  static async _simpleReq(rq, rs, promise, mess, rule) {
    try {
      const data = await promise;
      eventList.addEvent(mess);
      return DataHandler.isFound(rs, data, mess, rule);
    } catch (error) {
      return DataHandler.ifError(rq, rs, error, mess, rule);
    }
  }
}

export class BApiCustom {
  /**
   * @method
   */
  constructor() {}

  static async registryUserBEPostOne(
    rq,
    rs,
    customRule,
    model,
    mess,
    folderLoc
  ) {
    const { email, password } = rq.body;

    //check if email exist and delete image
    const userEmailExist = await model.exists({ email });
    if (userEmailExist)
      return DataHandler.duplicatedEmail(rq, rs, mess, customRule, email);
    //check if email exist and delete image

    //encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);
    //encrypt password

    return BApi._simpleReq(
      rq,
      rs,
      model.create({
        ...rq.body,
        password: encryptedPassword,
        repeatPassword: encryptedPassword,
        image: rq.file?.filename && fileUrl(`${folderLoc}/`) + rq.file.filename,
      }),
      mess,
      customRule
    );
  }

  static async registryUserBEPatchOne(
    rq,
    rs,
    customRule,
    model,
    mess,
    folderLoc
  ) {
    const { password } = rq.body;
    const { id } = rq.params;

    //encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);
    //encrypt password

    //userPrevImg with rq.file?.filename
    const user = await model.findById(id);
    if (!user) return DataHandler.dataNotFound(rq, rs, mess, customRule);
    rq.file?.filename &&
      DataHandler.delPrevImg(folderLoc, user, mess, customRule);
    //userPrevImg with rq.file?.filename

    return BApi._simpleReq(
      rq,
      rs,
      model.findByIdAndUpdate(
        id,
        {
          ...rq.body,
          password: encryptedPassword,
          repeatPassword: encryptedPassword,
          image: rq.file?.filename
            ? fileUrl(`${folderLoc}/`) + rq.file.filename
            : user.image,
        },
        { new: true }
      ),
      mess,
      customRule
    );
  }

  static async registryUserBEDeleteOne(
    rq,
    rs,
    customRule,
    model,
    mess,
    folderLoc
  ) {
    const { id } = rq.params;
    //userPrevImg
    const user = await model.findById(id);
    if (!user) return DataHandler.dataNotFound(rq, rs, mess, customRule);
    DataHandler.delPrevImg(folderLoc, user, mess, customRule);
    //userPrevImg
    return BApi._simpleReq(
      rq,
      rs,
      model.findByIdAndDelete(id),
      mess,
      customRule
    );
  }
}
