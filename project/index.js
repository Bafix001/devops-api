const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps API</title>
        <style>
          body {
            background: #0f172a;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: #1e293b;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            text-align: center;
          }
          h1 {
            color: #38bdf8;
          }
          p {
            margin: 5px 0;
          }
          .version {
            color: #22c55e;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 DevOps Project</h1>
          <p class="version">Version: v1</p>
          <p>Hostname: ${os.hostname()}</p>
          <p>Uptime: ${process.uptime().toFixed(2)} sec</p>
          <p>Date: ${new Date()}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});