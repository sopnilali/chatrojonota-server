var express = require('express');
const MyPosts = require('../../models/Postschema');
const verifyToken = require('../../middleware/verifyToken');
var router = express.Router();


router.get('/api/myposts', async (req, res) => {
    const result = await MyPosts.find();
    res.send(result);
})

router.get('/api/myposts/:UserId',verifyToken, async (req, res) => {
    const user = req.params.UserId
    console.log(user);
    const result = await MyPosts.find({UserId: user});
    res.send(result);
})

router.get('/api/mypost/:id', verifyToken, async (req, res) => {
    const id = req.params.id;
    const result = await MyPosts.findOne({_id: id});
    res.send(result);
})

router.post('/api/myposts', async (req, res)=>{
    const myposts = req.body;
    const mypostResult = await MyPosts.create(myposts);
    res.send(mypostResult);
})
router.delete('/api/myposts/:id', async (req, res) => {
    const id = req.params.id;
    const result = await MyPosts.deleteOne({_id: id});
    res.send(result);
})

module.exports = router;