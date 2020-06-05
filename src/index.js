import _ from "lodash";
import mime from "mime";
import { version } from "../package.json";

const template = require("../templates/index");

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
  } else if (element[0] === undefined) {
    /** index */
    return new Response(template(), {
      status: 200,
      statusText: "OK",
      headers: {
        "x-version": version,
        "content-type": mime.getType("html"),
        "cache-control": cache_control
      }
    });
  } else if (_.isEqual(element, ["static", "tailwind.min.css"])) {
    /** tailwind */
    return await fetch(
      "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
      { cf: { cacheTtl: 30 * 86400 } }
    );
  } else if (element[0] === "favicon.svg") {
    /** favicon */
    const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍕</text></svg>`;
    return new Response(favicon, {
      status: 200,
      statusText: "OK",
      headers: {
        "x-version": version,
        "content-type": mime.getType("svg"),
        "cache-control": cache_control
      }
    });
  } else {
    /** 404 */
    return new Response("404 Not Found", {
      status: 404,
      statusText: "Not Found"
    });
  }
};

addEventListener("fetch", event => event.respondWith(handleRequest(event)));
