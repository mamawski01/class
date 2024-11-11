"use strict";

import { deleteImage } from "../../utils/bHelpers.js";

class DataHandler {
  constructor(rs, data) {
    this.rs = rs;
    this.data = data;
  }
  static isFound(data, rs, mess, rule) {
    return rs.status(200).send({ data, "fx=": mess, "rule=": rule });
  }
  static ifError(rq, rs, error, mess, rule) {
    console.log(error, `${error.message} fx=${mess}, rule=${rule}`);
    deleteImage(rq.file?.path, mess, rule);
    return rs.status(500).send(`${error.message} fx=${mess}, rule=${rule}`);
  }
}

export default class BApi {
  constructor() {}
  static async simpleGetAll(rq, rs, model, mess) {
    try {
      const data = await model.find();
      return DataHandler.isFound(data, rs, mess, "simpleGetAll");
    } catch (error) {
      return DataHandler.ifError(rq, rs, error, mess, "simpleGetAll");
    }
  }
}
