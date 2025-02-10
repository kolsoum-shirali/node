const express = require("express");
const app = express();
const path = require("path");

module.exports = class Application {
  constructor() {
    this.setConfig();
    this.configServer();
  }

  configServer() {
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "resource/views", "index.html"));
    });

    app.listen(3000, (err) => {
      if (err) console.log(err);
      console.log("Server running on port 3000");
    });
  }

  setConfig() {
    app.use(express.static(path.join(__dirname, 'public')));
    app.set("views", path.join(__dirname, "resource/views"));
    app.set("views", path.join(__dirname, "resource/views"));
  }
};