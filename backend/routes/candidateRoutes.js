const express = require('express');
const router = express.Router();
const { getCandidates, addCandidate } = require('../controllers/candidateController');

router.get('/', getCandidates);
router.post('/', addCandidate);

module.exports = router;
