import _ from "lodash";
import mime from "mime";
import { DateTime } from "luxon";
import { version } from "../package.json";

const template = require('../templates/index')
/**
 * Respond to the request
 * @param {Request} request
 */
const handleRequest = async event => {
  const cache_control = "max-age=600";
  return new Response(
    template(),
    {
      status: 200,
      statusText: "OK",
      headers: {
        "x-version": version,
        "content-type": mime.getType("html"),
        "cache-control": cache_control
      }
    }
  );
};

addEventListener("fetch", event => event.respondWith(handleRequest(event)));
