const layout = () => `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Madeira Tech Meetup</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
  </head>
  <body style="font-family: 'ubuntu';">
    <div class="container mx-auto">
      <h1 class="text-5xl text-center py-8"><b>Madeira Tech Meetup</b></h1>
      <h2 class="text-3xl text-center"><b>Next Edition</b></h2>
      <h3 class="text-xl text-center">
        📅 Wed, April 15th<br>
        <a href="https://goo.gl/maps/uyurHP3Le5yCNaqLA" target="_blank">📌 Cowork Funchal</a>
      </h3>
      <p class="text-center py-4">
        <a href="https://www.meetup.com/pt-BR/Madeira-Tech/events/268681799/" target="_blank">
          👉 Sign up here! 👈
        </a>
      </p>
      <div class="flex flex-wrap">

      </div>
    </div>
  </body>
</html>
`
module.exports = layout
