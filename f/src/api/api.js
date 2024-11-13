import axios from "axios";
import io from "socket.io-client";

const bServer = "http://localhost:7000";

const apiClient = axios.create({
  baseURL: bServer,
  timeout: 10000,
});

export const fSocket = io.connect(bServer);

//first happening sending data to BE
function f2bFx(f2b, data) {
  fSocket.emit(`${f2b}F2B`, data);
}

class DataHandler {
  /**
   * @method
   */
  constructor() {}
  static ifError(exception, mess) {
    console.log(exception, mess);
    console.log(exception.response.data);
    //   toast.error(exception.response.data);
    return exception.response.data;
  }
}

export default class Api {
  constructor() {}
  static async simpleGetNull(url, mess, f2b) {
    return Api._simpleReq(url, mess, f2b);
  }
  static async _simpleReq(url, mess, f2b) {
    try {
      const { data } = await apiClient.get(url);
      f2bFx(f2b, data);
      return data;
    } catch (exception) {
      return DataHandler.ifError(exception, mess);
    }
  }
}
