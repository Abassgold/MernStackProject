const express = require('express');
const {
    postNewWorkout,
     getAllWorkouts,
    getAsingleWporkout,
    deleteAsingleWporkout,
    updateAsingleWporkout,
    uploadFile
} = require('../constroller/constroller.user')
const router = express.Router()
// post a new workout
router.post('/post', postNewWorkout)
//Get all workout
router.get('/allworkout', getAllWorkouts );
//get a single workout
router.get('/:id', getAsingleWporkout);
//delete a single workouts
router.delete('/:id', deleteAsingleWporkout);
router.post('/upload', uploadFile)
// Update a single workouts
router.patch('/welcome', updateAsingleWporkout);


module.exports = router;