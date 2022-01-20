const app = require("./index");
const server = require("./configs/db");

app.listen(process.env.PORT || 5000, async (req, res) => {
  server();
  console.log("Default port is active on PORT");
});
