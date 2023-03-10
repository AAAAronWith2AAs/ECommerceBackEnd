const express = require("express");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is connected at PORT: ${PORT}`);
  });
});
