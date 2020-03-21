import _ from "lodash";
import mime from "mime";
import { DateTime } from "luxon";

/**
 * Respond to the request
 * @param {Request} request
 */
const handleRequest = async event => {
  return new Response(
    `madeira tech meetup
sponsored by: cloudflare and cowork funchal`,
    { status: 200, headers: { "Content-Type": mime.getType("txt") } }
  );
};

addEventListener("fetch", event => event.respondWith(handleRequest(event)));