const { response } = require('express');
const Plan   = require('../models/Plan');
const Usuario = require('../models/Usuario');

const crearPlan = async(req, res = response) => {
    const plan = new Plan ({
      title:  req.body.title,
      desc:   req.body.desc,
      date:   req.body.date,
      time:   req.body.time,
      img:    req.body.img,
      name:   req.body.name,
      email:  req.body.email,
      phone:  req.body.phone
    });
    // Save Evento in the database
    Plan.create( plan ).then(() => {
    res.json({
        ok: true,
        plan 
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
  Plan.find(condition)
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
  Plan.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Tutorial with id " + id });
    else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Tutorial with id=" + id });
  });
};

const deletePlan = async(req, res = response ) => {
  const id = req.params.id;
  Plan.findByIdAndRemove(id, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
    } else {
      res.send({
        message: "Tutorial was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
    });
  });

};

const deleteAll = async(req, res = response ) => {
  Plan.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

module.exports = {
    crearPlan,
    findAll,
    findOne,
    deletePlan,
    deleteAll
}

/*
const plan = new Plan ({
    title:  req.body.title,
    desc:   req.body.desc,
    date:   req.body.date,
    time:   req.body.time,
    img:    req.body.img,
    
  });
  

const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  Plan.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
*/