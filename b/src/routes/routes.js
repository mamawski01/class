"use strict";
import express from "express";

import BApi from "./api/bApi.js";
import RegistryUserModel from "./api/models/RegistryUserModel.js";

export const routes = express.Router();

//registryUser
routes.get("/registryUserBEGetAll", (rq, rs) =>
  BApi.simpleGetAll(rq, rs, RegistryUserModel, "registryUserBEGetAll")
);

routes.get("/registryUserBEGetOne/:id", (rq, rs) =>
  BApi.simpleGetOne(rq, rs, RegistryUserModel, "registryUserBEGetOne")
);
