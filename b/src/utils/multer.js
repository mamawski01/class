import multer from "multer";
import path from "path";
import dayjs from "dayjs";
import fs from "fs";

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

export function imgLoc(loc = "") {
  return "./images/uploads/" + loc;
}

export function imageName(imgName = "") {
  return dayjs(Date.now()).format("YYYY-MM-DD-hh-mm-ssa-SSS") + imgName;
}

export const upload = (folName = "userImgFolder", imgName = "userImg") => {
  if (fs.existsSync(imgLoc(folName))) {
    console.log(`Folder already exists ${imgLoc(folName)}`);
  } else {
    fs.mkdir(imgLoc(folName), { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`Folder created at ${imgLoc(folName)}`);
    });
  }

  return multer({
    limits: 50000,
    storage: multer.diskStorage({
      destination: function (_rq, _file, cb) {
        cb(null, imgLoc(folName));
      },
      filename: function (_rq, file, cb) {
        cb(null, imageName(imgName) + path.extname(file.originalname));
      },
    }),
    fileFilter: (_rq, file, cb) => {
      const isValid = !!MIME_TYPE_MAP[file.mimetype];
      let error = isValid ? null : new Error("Invalid mime type!");
      cb(error, isValid);
    },
  });
};
