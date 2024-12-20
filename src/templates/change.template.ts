export const getChangeTemplate = () => ({
  subject: "Password change successful",
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
              font-size: 32px;
              font-weight: bold;
              color: #222
            }

            .subtitle {
              font-size: 24px;
              font-weight: bold;
              color: #222
            }

            .text__account {
              padding: 8px;
              font-size: 24px;
              font-weight: bold;
              color: #a448ff;
              border: 1px solid #a448ff;
              border-radius: 8px;
            }
          </style>
        </head>

        <body>
          <main class="container">
            <div>
              <h2 class="title">Financial Management App</h2>
            </div>
            <div>
              <h2 class="subtitle">😀 Congratulations! 👍</h2>
            </div>
            <div>
              <span class="text__account">✨The password change has been successful.✨</span>
            </div>
          </main>
        </body>
      </html>
    `,
});
