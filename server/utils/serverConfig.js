const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

exports.corsConfig = {
  origin: `http://${process.env.CLIENT_IP}:3000`,
  credentials: true,
};
