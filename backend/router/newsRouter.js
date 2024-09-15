

const express=require('express')
const { newsController } = require('../Controller/newsContoller')

const newsRouter=express.Router()



newsRouter.get('/news',newsController)

module.exports=newsRouter