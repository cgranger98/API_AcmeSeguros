const express = require("express");
const Router = require("./routes/Routes");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://Xertal98:c8yl87XqvkFzsruZ@maincluster.h1j2z8f.mongodb.net/AcmeSeguros?retryWrites=true&w=majority";

app.use(express.json());
app.use("/api", Router);
app.use("/", (req, res) => {
  res.send({
    status: "404",
    data: `<h1>Something went wrong! please use <a href="/api/seguros">/api/seguros</a> or <a href="/api/usuarios">/api/usuarios</a> </h1>`,
  });
});

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
