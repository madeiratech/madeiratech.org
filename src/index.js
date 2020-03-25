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
  const parsedUrl = new URL(event.request.url);
  const element = parsedUrl.pathname.split("/").filter(n => n);
  /** Block bot crawling */
  if (
    !!parsedUrl.hostname.match(/staging.madeiratech.org/i) &&
    element[0] === "robots.txt"
  ) {
    return new Response("User-agent: *\nDisallow: /", {
      status: 200,
      statusText: "OK"
    });
  }

  return new Response(template(), {
    status: 200,
    statusText: "OK",
    headers: {
      "x-version": version,
      "content-type": mime.getType("html"),
      "cache-control": cache_control
    }
  });
};

addEventListener("fetch", event => event.respondWith(handleRequest(event)));
