const router = require('express').Router();
const cat = require('./model');

router.route('/')
  .post(async (req, res) => {
    const post = await cat.create({
      title: req.body.title,
      body: req.body.body,
      hidden: false
    });
    res.send(`cat post ${post.title} created with id: ${post._id}`);
  })
  .get(async (req, res) => {
    res.send(await cat.find({ hidden: false }).where('date').gt(new Date(new Date().setFullYear(new Date().getFullYear() - 1))));
  });

router.route('/:id')
  .get(async (req, res) => {
    res.send(await cat.findById(req.params.id));
  })
  .patch(async (req, res) => {
    const mod = await cat.updateOne({ _id: req.params.id }, { title: req.body.title });
    res.status(200).send(`updated sucessfully ${mod.nModified} cat post`);
  })
  .delete(async (req, res) => {
    const del = await cat.deleteOne({ _id: req.params.id });
    res.send(`deleted ${del.deletedCount} cat post`);
  });

module.exports = router;