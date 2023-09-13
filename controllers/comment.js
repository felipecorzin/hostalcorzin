const { response } = require('express');
const Comment = require('../models/Comment');
const Usuario = require('../models/Usuario');

const createComment = async(req, res = response) => {
    const comment = new Comment ({
        title:  req.body.title,
        desc:   req.body.desc,
        img:    req.body.img,
        name:   req.body.name,
        email:  req.body.email,
        phone:  req.body.phone
    });
    // Save Comment in the database
    Comment.create( comment ).then(() => {
      res.json({
          ok: true,
          comment 
      });
      }).catch( err => {
          res.json({
              ok: false,
              err
          });
      });
};

const findAll = async(req, res = response ) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Comment.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
    
};

const findOne = async(req, res = response ) => {
  const id = req.params.id;
  Comment.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Cart with id " + id });
    else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Cart with id=" + id });
  });
};

module.exports = {
    createComment,
    findAll,
    findOne
}