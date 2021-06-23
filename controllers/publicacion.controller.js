const Publicacion = require('../models/publicacion');
const publicacionCtrl = {}

publicacionCtrl.getPublicaciones = async (req, res) => {
    var publicaciones = await Publicacion.find();
    res.json(publicaciones);
}


publicacionCtrl.addPublicacion = async (req, res) => {
    var publicacion = new Publicacion(req.body);
    try {
        await publicacion.save();
        res.json({
            'status': '1',
            'msg': 'Publicacion guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

publicacionCtrl.getPublicacion = async (req, res) => {
    const publicacion = await Publicacion.findById(req.params.id);
    res.json(publicacion);
}

publicacionCtrl.editPublicacion = async (req, res) => {
    const vpublicacion = new Publicacion(req.body);
    try {
        await Publicacion.updateOne({ _id: req.body._id }, vpublicacion);
        res.json({
            'status': '1',
            'msg': 'Pulicacion updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

publicacionCtrl.deletePublicacion = async (req, res) => {
    try {
        await Publicacion.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Publicacion removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = publicacionCtrl;