var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

module.exports = router;