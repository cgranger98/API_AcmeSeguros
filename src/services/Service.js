const { Usuario, Seguro } = require("../database/utils");
const { v4: uuid } = require("uuid");

//SEGUROS
const createOneSeguro = (newSeguro) => {
  try {
    const seguro = Seguro.create(newSeguro);
    return seguro;
  } catch (error) {
    console.log(error);
  }
};

const getAllSeguros = () => {
  try {
    const seguros = Seguro.find({});
    return seguros;
  } catch (error) {
    console.log(error);
  }
};

const getOneSeguro = (IdSeguro) => {
  try {
    const seguro = Seguro.findById(IdSeguro);
    return seguro;
  } catch (error) {
    console.log(error);
  }
};

const updateOneSeguro = (IdSeguro, changes) => {
  try {
    const updatedSeguro = Seguro.findByIdAndUpdate(IdSeguro, changes);
    return updatedSeguro;
  } catch (error) {
    console.log(error);
  }
};

const deleteOneSeguro = (IdSeguro) => {
  try {
    const deletedSeguro = Usuario.findOneAndRemove(IdSeguro);
    return deletedSeguro;
  } catch (error) {
    console.log(error);
  }
};

//USUARIOS
const createOneUsuario = (newUsuario) => {
  try {
    const usuario = Usuario.create(newUsuario);
    return usuario;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsuarios = () => {
  try {
    const usuarios = Usuario.find({});
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};

const getOneUsuario = (IdUsuario) => {
  try {
    const usuarios = Usuario.findById(IdUsuario);
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};

const updateOneUsuario = (IdUsuario, changes) => {
  try {
    const updatedUsuario = Usuario.findByIdAndUpdate(IdUsuario, changes);
    return updatedUsuario;
  } catch (error) {
    console.log(error);
  }
};

const deleteOneUsuario = (IdUsuario) => {
  try {
    const deletedUsuario = Usuario.findOneAndRemove(IdUsuario);
    return deletedUsuario;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  //seguros
  createOneSeguro,
  getAllSeguros,
  getOneSeguro,
  updateOneSeguro,
  deleteOneSeguro,
  //usuarios
  createOneUsuario,
  getAllUsuarios,
  getOneUsuario,
  updateOneUsuario,
  deleteOneUsuario,
};
