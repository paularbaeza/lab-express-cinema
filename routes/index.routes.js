const router = require("express").Router();
const express = require('express');
const Movies = require('../models/Movies.model.js');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

//GET movies page

router.get("/movies", (req, res, next) => {
    Movies.find().select("title").select("image")
    .then ((response)=> {
        res.render("movies/all-movies",{
            moviesArr:response
        })
    })
    .catch((err)=>{
        next(err)
    })
})

router.get("/movies/:id", (req, res, next) => {
    const movieId= req.params.id
    Movies.findById(movieId)
    .then ((response)=> {
        //console.log(response)
        res.render("movies/movie-information",{
            movieChosen: response
        })
    })
    .catch((err)=>{
        next(err)
    })
})




module.exports = router;
