
const express = require('express');
const router = express.Router();

const userCntrl = require('../controller/users');
router.get('/', (req, res)=>{
    res.end('Hello WOrld');
})

router.post('/create',userCntrl.createUser );
router.post('/login',userCntrl.login );
router.get('/view', userCntrl.viewUsers);
router.post('/:id', userCntrl.update);
router.post('/d/:id', userCntrl.delete);

module.exports = router;