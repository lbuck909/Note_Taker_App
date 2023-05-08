const router = require('express').Router()
const store = require('../db/store');

router.get('/notes', (req, res) =>{
  store.getNote()
  .then(notes => res.json(notes))
  .catch(err => res.status(500).res.json(err))

})

router.post('/notes', (req, res) =>{
  store.addNotes(req.body)
  .then(notes => res.json(notes))
  .catch(err => res.status(500).res.json(err))

})
module.exports = router;