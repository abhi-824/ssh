import { createRequestHandler } from "@react-router/netlify";
import * as build from "../../build/server/index.js";

export default createRequestHandler({ build });
