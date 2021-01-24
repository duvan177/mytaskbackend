"use strict";
import express, { Router } from "express";
import cors from "cors";
import morgan from "morgan";
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", process.env.ALLOWORIGIN_URL); //Servidor que consume la API del servidor
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "DELETE,POST,GET,OPTIONS,PUT,PATCH"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Max-Age: 0");
    next();
  });
app.use(cors());


export default app;
