import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

app.listen(5500, () => console.log("Server is running"));