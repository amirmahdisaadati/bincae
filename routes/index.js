const express=require('express')
const router=express.Router()
const binaceService=require('./../services/binace')


router.get('/get/allPrices',(req,res,next)=>{

    binaceService.getAllPrice()
                    .then(result=>{
                        res.status(result.status).send(result)
                    })
                    .catch(err=>{
                        res.status(err.status).send(err)
                    })
})



module.exports=router;