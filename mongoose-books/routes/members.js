const express = require('express');
const router = express.Router();
const membersCtrl = require('../controllers/members');


router.get('/members/new', membersCtrl.new);
router.post('/members', membersCtrl.create);
router.post('/books/:id/members', membersCtrl.addToGroup);

module.exports = router;