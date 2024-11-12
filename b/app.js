"use strict";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";

import { routes } from "./src/routes/routes.js";

dotenv.config();
const PORT = process.env.PORT || process.env.API_PORT;
const localhost = `http://localhost:${PORT}/`;

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket);
  socket.on("registryUserBEGetAllF2B", (data) => {
    console.log(data);
    io.emit("registryUserBEGetAllB2F", data);
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(localhost + " connected to db");
    });
  })
  .catch((err) => {
    console.log("Db and server fail" + err);
  });

app.use("/", routes);
