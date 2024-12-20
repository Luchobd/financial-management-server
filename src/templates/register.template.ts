export const getRegisterTemplate = (name: string, email: string) => ({
  subject: "Welcome to Take Note App",
  html: `
      <html>
        <head>
          <style>
            @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              font-family: "Roboto", sans-serif;
            }

            div {
              margin-bottom: 20px;
            }

            .container {
              padding: 20px;
              width: 100%;
              height: 100vh;
              font-family: "Roboto", sans-serif;
            }

            .title {
              font-size: 24px;
              font-weight: bold;
              color: #222
            }

            .subtitle,
            .text__email {
              font-size: 16px;
              font-weight: bold;
              color: #222
            }
          </style>
        </head>

        <body>
          <main class="container">
            <div>
              <h2 class="title">Financial Management App</h2>
            </div>
            <div>
              <h2 class="subtitle">Hola ${name}, your registration was successful</h2>
            </div>
            <div>
              <h3 class="text__email">The email that was registered is: ${email}</h3>
            </div>
          </main>
        </body>
      </html>
    `,
});
