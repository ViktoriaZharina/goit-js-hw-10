<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/styles-2.css" />
    <title>Page 3</title>
  </head>
  <body>
    <section>
      <a href="./index.html">Go to home</a>
      <form class="form">
        <label>
          Delay (ms)
          <input type="number" name="delay" required />
        </label>

        <fieldset>
          <legend>State</legend>
          <label>
            <input type="radio" name="state" value="fulfilled" required />
            Fulfilled
          </label>
          <label>
            <input type="radio" name="state" value="rejected" required />
            Rejected
          </label>
        </fieldset>

        <button type="submit">Create notification</button>
      </form>
    </section>
    <script src="./js/2-snackbar.js" type="module" defer></script>
  </body>
</html>