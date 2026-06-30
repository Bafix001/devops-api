const express = require("express");
const app = express();

const PORT = 3000;

// route principale
app.get("/", (req, res) => {
  res.json({ message: "Hello DevOps 🚀" });
});

// lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
``