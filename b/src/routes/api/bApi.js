"use strict";

import { deleteImage } from "../../utils/bHelpers.js";
import { eventList } from "../bio.js";

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
    return BApi._handleRequest(rq, rs, model.find(), mess, "simpleGetAll");
  }

  static async simpleGetAllLocal(rq, rs, model, mess) {
    return BApi._handleRequest(rq, rs, model, mess, "simpleGetLocal");
  }

  static async simpleGetOne(rq, rs, model, mess) {
    const { id } = rq.params;
    return BApi._handleRequest(
      rq,
      rs,
      model.findById(id),
      mess,
      "simpleGetOne"
    );
  }

  static async _handleRequest(rq, rs, promise, mess, rule) {
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
