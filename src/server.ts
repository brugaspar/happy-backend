import "./database/connection";

import express from "express";
import "express-async-errors";

import morgan from "morgan";
import path from "path";
import cors from "cors";

import routes from "./routes";

import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(routes);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333, () => console.log("\n✔ Server running at http://localhost:3333\n"));