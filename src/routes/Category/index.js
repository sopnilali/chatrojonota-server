var express = require('express');
const MyCategory = require('../../models/CategorySchema');
var router = express.Router();


router.get('/api/mycategory', async (req, res) => {
    const result = await MyCategory.find();
    res.send(result);
})

router.post('/api/mycategory', async (req, res)=>{
    const mycategory = req.body;
    const mycategoryResult = await MyCategory.create(mycategory);
    res.send(mycategoryResult);
})

module.exports = router;