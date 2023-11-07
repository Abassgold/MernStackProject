const model = require('../models/model.user')
require('dotenv').config()

const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.API_SECRET
});
// post a new workout
const postNewWorkout = (req, res) => {

    let userModel = new model(req.body)
    userModel.save().then((result) => {
        console.log(req.params.id)
        console.log(result)
        res.json({ status: 200, result })
    }).catch((err) => {
        console.log(err, "")
        res.json({ status: 400, error: err.message })
    })
}
//Get all workout
const getAllWorkouts = (req, res) => {
    model.find().sort({ createdAt: -1 }).then((result) => {
        if (result) {
            res.status(200).json(result)
            console.log(result)
        }
        else {
            res.status(400).json('cannot find any items')
            console.log('Cannot find items');
        }
    }).catch(err => console.log(err))
}
//get a single workout
const getAsingleWporkout = (req, res) => {
    const { id } = req.params
    console.log(id)
    model.findById(id)
        .then((result) => {
            if (result) {
                return res.status(200).json({ mess: "Get a single workout", result })

            }
            console.log('e no dey');
        }).catch(err => console.log(err))
}

//delete a single workouts
const deleteAsingleWporkout = (req, res) => {
    const { id } = req.params
    model.findOneAndDelete(id).then((result) => {
        if (result) {
            return res.status(200).json({ mess: "Delete a single workout" })
        }
        console.log('cannot delete');
    }).catch(err => console.log(err, 'you have error and cannot delete'))
}
// Update a single workouts
const updateAsingleWporkout = (req, res) => {
    res.json({ mess: "Upadate a workout" })
}

const uploadFile = (req, res) => {
    let { myFile } = req.body
    cloudinary.uploader.upload(myFile)
        .then(result => {
            let img = result.secure_url
            console.log(img)
            return res.json({img})
        })
        .catch(err => console.log(`There is an Error ${err}`))
}
module.exports = {
    postNewWorkout,
    getAllWorkouts,
    getAsingleWporkout,
    deleteAsingleWporkout,
    updateAsingleWporkout,
    uploadFile
};