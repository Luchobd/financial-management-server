export const getForgottenTemplate = (key: string, name: string, email: string) => ({
  subject: "Forgot my password email",
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

            .title h2 {
              font-size: 24px;
              font-weight: bold;
              color: #222
            }

            .subtitle {
              font-size: 16px;
              font-weight: bold;
              color: #222
            }

            .temporaryKey {
              margin-top: 10px;
              display: inline-block;
              text-align: center;
              border: 1px solid #a448ff;
              border-radius: 8px;
              padding: 20px;
              font-size: 32px;
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
              <h2 class="subtitle">Hola ${name}, change of password to: ${email}</h2>
            </div>
            <div class="temporaryKeyContent">
              <h3 class="subtitle" style="text-decoration: underline;">verification key</h3>
              <span class="temporaryKey">${key}</span>
            </div>
          </main>
        </body>
      </html>
    `,
});
