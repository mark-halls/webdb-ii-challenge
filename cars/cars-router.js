const express = require(`express`);

const knex = require(`../data/dbConfig`);
const router = express.Router();

router.use(express.json());

function validateId(req, res, next) {
  const id = req.params.id;
  knex(`cars`)
    .select(`*`)
    .where({ id })
    .first()
    .then(car => {
      if (car) {
        req.car = car;
        next();
      } else {
        res.status(404).json({ message: `car not found` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
}

// get cars
router.get(`/`, (req, res) => {
  knex(`cars`)
    .then(cars => res.status(200).json(cars))
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

// get cars by id
router.get(`/:id`, validateId, (req, res) => {
  res.status(200).json(req.car);
});

// add new car
router.post(`/`, (req, res) => {});

// update car by id
router.put(`/:id`, validateId, (req, res) => {
  const id = res.car.id;
  const data = req.body;

  if (
    data.vin ||
    data.make ||
    data.model ||
    data.mileage ||
    data.transmission ||
    data.title_status
  ) {
    knex(`cars`)
      .where({ id })
      .update(data)
      .then(count => {
        res.status(200).json({ message: `${count} record(s) updated` });
      })
      .catch(error =>
        res.status(500).json({ errorMessage: `Unable to update account` })
      );
  } else {
    res.status(400).json({
      errorMessage: `Body must contain at least one of the following: vin, make, model, mileage, transmission, title_status`
    });
  }
});

// delete car by id
router.delete(`/:id`, validateId, (req, res) => {
  const id = req.car.id;
  knex(`cars`)
    .where({ id })
    .del()
    .then(count =>
      res.status(202).json({ message: `${count} record(s) removed` })
    )
    .catch(error => {
      console.error(error);
      res.status(500).json({ errorMessage: `Error removing car` });
    });
});

module.exports = router;
