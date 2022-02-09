const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> d60b0a6dc860090513795b00598461dd7364edda
