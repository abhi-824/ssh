import { createRequestHandler } from "@react-router/serve";
import * as build from "../../build/server/index.js";

export default async function handler(req, res) {
  try {
    const requestHandler = createRequestHandler({ build });
    return requestHandler(req, res);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
}
