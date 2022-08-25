
//Requerimientos
const express = require('express');
const app =express();
const {router}= require('./routes/indexRoutes.js')


const PORT= 8090;
app.listen(PORT,()=>{
    console.log("El server escucha");
})
app.set('views','./views')
app.set('view engine','pug');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',require('./routes/indexRoutes.js'));


