const express = require("express");
const { Router } = require('express');
//const router= express.Router();
// const router = require("express").Router();   asi en 1 linea ejecuto ambas
const getChardById = require ("../controllers/getCharById");
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const login = require ("../controllers/login");


const router= Router();  //me devuelve middlewares

router.get("/character/:id", getChardById); 
router.get("/login", login);
router.get("/fav", postFav);
router.get("/fav/:id", deleteFav);


module.exports=router;
