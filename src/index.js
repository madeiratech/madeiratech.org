/**
 * Respond to the request
 * @param {Request} request
 */

const handleRequest = async request => {
  return new Response(
    `madeira tech meetup
sponsored by: cloudflare and cowork funchal`,
    { status: 200 }
  );
};

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});
