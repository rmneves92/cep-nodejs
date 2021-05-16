const express = require('express');
const api = require('../api');
const routes = express.Router();

routes.get('/:cep', async (req, res) => {
  try {
    const { cep } = req.params;
    const { data } = await api.get(`${cep}/json/`);

    res.send({
      cep: data.cep,
      logradouro: data.logradouro,
      localidade: data.localidade,
      uf: data.uf,
    });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = routes;
