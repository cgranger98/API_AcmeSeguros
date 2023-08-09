const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller");

router
  .get("/seguros/", Controller.getAllSeguros)
  .get("/seguros/:IdSeguro", Controller.getOneSeguro)
  .post("/seguros/", Controller.createOneSeguro)
  .patch("/seguros/:IdSeguro", Controller.updateOneSeguro)
  .delete("/seguros/:IdSeguro", Controller.deleteOneSeguro)
  //usuarios
  .get("/usuarios/", Controller.getAllUsuarios)
  .get("/usuarios/:IdUsuario", Controller.getOneUsuario)
  .post("/usuarios/", Controller.createOneUsuario)
  .patch("/usuarios/:IdUsuario", Controller.updateOneUsuario)
  .delete("/usuarios/:IdUsuario", Controller.deleteOneUsuario);

module.exports = router;
