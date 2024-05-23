"use strict";

class AccessController{
    signUp = async(req, res, next)=>{
        try{
            console.log(`[p]::signUp`, req.body)
            /**
            200 OK
            2001 CREATED
             */
            return res.status(201).json({
                code: '2001',
                metadata: {userId: 1}
            })
        }catch(error){
            next(error)
        }
    }
}

module.exports = new AccessController