import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import MongoStore from "connect-mongo";
import path from "path";
import cors from "cors";
import fs from "fs";
import errorHandler from "errorhandler";
import dotenv from "dotenv";
import request from "request";
import {SitemapHelper} from './controllers/helpers/SitemapHelper';

// Controllers (route handlers)
import * as constructionController from "./controllers/construction";
import * as userController from "./controllers/user";

if (["staging", "production", "worker"].indexOf(process.env.NODE_ENV) == -1) {
  dotenv.config();
}

// Create Express server
let app = express();

app.enable("trust proxy");

// Express configuration
//
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET || Math.random().toString(),
  store: process.env.DOCUMENT_DATABASE_KEY && MongoStore.create({
    mongoUrl: process.env[process.env.DOCUMENT_DATABASE_KEY]
  }) || null,
  cookie: {}
}));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(lusca.xssProtection(true));

// CORS configuration
// 
app.use(cors());

// Cache configuration
// 
app.use(
  express.static(path.join(__dirname, "public"), {maxAge: 0})
);

// Error handler
if (["production"].indexOf(process.env.NODE_ENV) == -1) {
  app.use(errorHandler());
}

// Serve sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  res.set('Content-Type', 'text/xml');
  res.send(SitemapHelper.generateXMLDocument());
});

process.on('SIGINT', function() {
  process.exit(0);
});

export default app;
