const Service = require("../services/Service");

//SEGUROS
const createOneSeguro = async (req, res) => {
  try {
    const seguro = await Service.createOneSeguro(req.body);
    res.status(200).json({ data: seguro });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSeguros = async (req, res) => {
  try {
    const seguros = await Service.getAllSeguros();
    res.status(200).json({ data: seguros });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneSeguro = async (req, res) => {
  try {
    const oneSeguro = await Service.getOneSeguro(req.params.IdSeguro);
    res.status(200).json({ data: oneSeguro });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOneSeguro = async (req, res) => {
  try {
    const updatedSeguro = await Service.updateOneSeguro(
      req.params.IdSeguro,
      req.body
    );
    res.status(200).json({ data: updatedSeguro });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOneSeguro = async (req, res) => {
  try {
    const deletedSeguro = await Service.deleteOneUsuario(req.params.IdSeguro);
    if (!deletedSeguro) {
      res
        .status(404)
        .json({ message: `Cannot find user with id ${req.params.IdSeguro}` });
    }
    res.status(200).json({ data: deletedSeguro });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//USUARIOS
const createOneUsuario = async (req, res) => {
  try {
    const usuario = await Service.createOneUsuario(req.body);
    res.status(200).json({ data: usuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Service.getAllUsuarios();
    res.status(200).json({ data: usuarios });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneUsuario = async (req, res) => {
  try {
    const oneUsuario = await Service.getOneUsuario(req.IdUsuario);
    if (!oneUsuario) {
      res.status(404).json({ message: `Cannot find user with id ${id}` });
    }
    res.status(200).json({ data: oneUsuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOneUsuario = async (req, res) => {
  try {
    const updatedUsuario = await Service.updateOneUsuario(
      req.params.IdUsuario,
      req.body
    );
    if (!updatedUsuario) {
      res
        .status(404)
        .json({ message: `Cannot find user with id ${req.params.IdUsuario}` });
    }
    res.status(200).json({ data: updatedUsuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOneUsuario = async (req, res) => {
  try {
    const deletedUsuario = await Service.deleteOneUsuario(req.params.IdUsuario);
    if (!deletedUsuario) {
      res
        .status(404)
        .json({ message: `Cannot find user with id ${req.params.IdUsuario}` });
    }
    res.status(200).json({ data: deletedUsuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
