"use strict";
import express from "express";

import BApi, { BApiCustom } from "./api/bApi.js";
import RegistryUserModel from "./api/models/RegistryUserModel.js";
import { upload } from "../utils/multer.js";

export const routes = express.Router();

const userImgFolLoc = "userImgFol";
const userImgFolName = "userImg";

//registryUser
routes.get("/registryUserBEGetAll", (rq, rs) =>
  BApi.simpleGetAll(rq, rs, RegistryUserModel, "registryUserBEGetAll")
);

routes.get("/registryUserBEGetOne/:id", (rq, rs) =>
  BApi.simpleGetOne(rq, rs, RegistryUserModel, "registryUserBEGetOne")
);

routes.post(
  "/registryUserBEPostOne",
  upload(userImgFolLoc, userImgFolName).single("image"),
  (rq, rs) =>
    BApiCustom.registryUserBEPostOne(
      rq,
      rs,
      "registryUserBEPostOne",
      RegistryUserModel,
      "registryUserBEPostOne",
      userImgFolLoc
    )
);

routes.patch(
  "/registryUserBEPatchOne/:id",
  upload(userImgFolLoc, userImgFolName).single("image"),
  (rq, rs) =>
    BApiCustom.registryUserBEPatchOne(
      rq,
      rs,
      "registryUserBEPatchOne",
      RegistryUserModel,
      "registryUserBEPatchOne",
      userImgFolLoc
    )
);

routes.delete("/registryUserBEDeleteOne/:id", (rq, rs) =>
  BApiCustom.registryUserBEDeleteOne(
    rq,
    rs,
    "registryUserBEDeleteOne",
    RegistryUserModel,
    "registryUserBEDeleteOne",
    userImgFolLoc
  )
);

//confirmedUser
