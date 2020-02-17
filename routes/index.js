var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inspeção madeira' });
});

/* GET new. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Novo cadastro' });
});

/* post new. */
router.post('/new', function(req, res, next) {
  var data = req.body.data;
  var importador = req.body.importador;
  var awb_hawb = req.body.awb_hawb;
  var awb_exp = req.body.awb_exp;
  var origem = req.body.origem;
  var vcp_importador = req.body.vcp_importador;
  var representante = req.body.representante;
  var nfa = req.body.nfa;
  res.redirect('/home' + data + importador + awb_hawb + awb_exp + origem + vcp_importador + representante +nfa );
});
module.exports = router;
