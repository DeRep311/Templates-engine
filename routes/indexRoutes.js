const express = require('express');
const { json } = require('express/lib/response');
const router  = express.Router();


let productos=[
    {
        title: "(nombre del producto)",
        price: "(precio)aaa",
        thumbnail: "(url al logo o foto del producto)",
        id:1
    },
    {
        title: "(nombre del producto)",
        price: "(precioeee)",
        thumbnail: "(url al logo o foto del producto)",
        id:2
    },
    {
        title: "(nombre del producto)",
        price: "(precio000)",
        thumbnail: "(url al logo o foto del producto)",
        id:3
    }
    
]



router.get('/', (req,res)=>{
    res.render('producto.pug', {})
})


router.post('/productos',(req,res)=>{
   
    let nombre=req.body.title;
    let price=req.body.price;
    let thumbnail= req.body.thumbnail;
    let idnew= (productos.length)+1;
        
    const ingreso= {
        title: nombre,
        price: price,
        thumbnail: thumbnail, 
        id:idnew
    }
    productos.push(ingreso);
    res.render('Muestra.pug',{lista:productos
    })
    
    console.log("ingresado");
        
    
    
    
    
})
router.get('/productos',(req,res)=>{
   
    res.render('Muestra.pug',{lista:productos
    })
    
   
        
    
    
    
    
})
module.exports=router
