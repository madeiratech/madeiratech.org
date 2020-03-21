import _ from "lodash";
import mime from "mime";
import { DateTime } from "luxon";
import { version } from "../package.json";

/**
 * Respond to the request
 * @param {Request} request
 */
const handleRequest = async event => {
  const cache_control = "max-age=600";
  return new Response(
    `madeira tech meetup
sponsored by: cloudflare and cowork funchal`,
    {
      status: 200,
      statusText: "OK",
      headers: {
        "x-version": version,
        "content-type": mime.getType("txt"),
        "cache-control": cache_control
      }
    }
  );
};

addEventListener("fetch", event => event.respondWith(handleRequest(event)));
