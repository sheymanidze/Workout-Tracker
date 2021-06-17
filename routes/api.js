const router = require("express").Router();
const db = require('../models');

//All workouts
router.get('/api/workouts/range', (req, res) => {
  db.Workout.find({})
    .then((allWorkouts) => {
      res.json(allWorkouts)
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
});

//Last workout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((lastWorkout) => {
      res.json(lastWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
});


//Create workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout)
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
});


module.exports = router;