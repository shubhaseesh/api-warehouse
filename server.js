const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const scriptURL = process.env.PORTFOLIO_SCRIPT_URL;
const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
