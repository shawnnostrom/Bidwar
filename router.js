const Router = require('express').Router();
const service = require('./service')

Router.get('/items', (req, res) => {
  const memoryStore = service.getMemoryStore();
  return res.send(memoryStore);
});

Router.post('/items', (req, res) => {
 
  service.addToMemoryStore(req.body)
  const memoryStore = service.getMemoryStore();
  return res.send(memoryStore);
});

Router.put('/items', (req, res) => {
  console.log(req.body)
  service.addBidMemoryStore(req.params.id)
  const memoryStore = service.getMemoryStore();
  return res.send(memoryStore);
});

Router.delete('/items', (req, res) => {
  req.body.forEach(key => service.deleteFromMemoryStore(key));
  const memoryStore = service.getMemoryStore();
  return res.send(memoryStore);
});

module.exports = Router;