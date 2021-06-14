const {mongoose} = require("mongoose");

const Alumno = require("../models/alumno");
const Cuota = require("../models/cuota");
const Usuario = require("../models/usuario");
const usuarioCtrl = require("./usuario.controller");

const alumnoCtrl = {};

alumnoCtrl.getAlumnos = async (req, res) => {
  var alumnos = await Alumno.find();
  res.json(alumnos);
};

alumnoCtrl.createAlumno = async (req, res) => {
  var alumno = new Alumno(req.body);
  try {
    console.log(req);
    await alumno.save();
    res.json({
      status: "1",
      msg: "Alumno guardado.",
    });
  } catch (error) {
    console.log("Error:");
    console.log(error);

    res.json({
      status: "0",

      msg: "Error procesando operacion.",
    });
  }
};

/**
 * Metodo para dar de alta una cuota dentro de un alumno, aislando todo el objeto alumno y recuperando solo el alumno para dar el alta de la cuota
 * Ejemplo del video de contactos
 * id alu, id usu
 */

alumnoCtrl.generarUsuario = async (req, res) => {
  const alumno = Alumno.findById(req.params.id);
  const criteria = {
    usu_username: req.body.usu_username,
  };
  try {
    if (alumno.alu_usuario == undefined) {
      Usuario.findOne(criteria, function (err, user) {
        if (!user) {
          const usuario = new Usuario(req.body);
          usuario.save();

         const  vusuario = Usuario.findById(usuario._id);
         alumno.alu_usuario = vusuario;
             Alumno.updateOne({ _id: req.params.id }, alumno);
             res.json({
              status: "1",

            });

        } else {
          res.json({
            status: "0",
            msg: "El usuario ya existe",
          });
        }
      });
    } else {
      res.json({
        status: "0",
        msg: "Error ya posee usuario.",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "0",
      msg: "Error inesperado revise la consola.",
    });
  }
};



/**
 * Metodo para dar de alta una cuota dentro de un alumno, aislando todo el objeto alumno y recuperando solo el alumno para dar el alta de la cuota
 * Ejemplo del video de contactos
 */
alumnoCtrl.registrarCuota = async (req, res) => {
  const cuota = new Cuota(req.body);
  const alumno = await Alumno.findById(req.params.id);
  alumno.alu_cuota.push(cuota);

  try {
    await Alumno.updateOne({ _id: req.params.id }, alumno);
    res.json({
      status: "1",
      msg: "Cuota guardada.",
    });
  } catch (error) {
    res.json({
      status: "0",

      msg: "Error procesando operacion.",
    });
  }
};

module.exports = alumnoCtrl;
