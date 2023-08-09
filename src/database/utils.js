const mongoose = require("mongoose");

const seguroScheme = mongoose.Schema(
  {
    nombreSeguro: {
      type: String,
      required: [true, "Porfavor ingrese un nombre"],
    },
    empresaContratante: {
      type: String,
      required: [true, "Porfavor ingrese un contratante"],
    },
    categoria: {
      type: String,
      required: [true, "Porfavor ingrese una categoria"],
    },
    descripcion: {
      type: String,
      required: false,
      default: "Descripcion del seguro no encontrada",
    },
  },
  {
    timestamps: true,
  }
);
const usuarioScheme = mongoose.Schema(
  {
    nombreUsuario: {
      type: String,
      required: [true, "Porfavor ingrese nombre de usuario"],
    },
    claveUsuario: {
      type: String,
      required: [true, "Porfavor ingrese contraseña"],
    },
    nombreCompleto: {
      type: String,
      required: [true, "porfavor ingrese un nombre valido"],
    },
    admin: { type: Boolean, required: false, default: false },
  },
  {
    timestamps: true,
  }
);

const Seguro = mongoose.model("Seguros", seguroScheme);
const Usuario = mongoose.model("Usuarios", usuarioScheme);

module.exports = { Seguro, Usuario };
