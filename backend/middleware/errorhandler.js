const errorHandler = (req, res, next, error) =>{
    
    if(error){
        return res.status(500).json({status: false, message: "Something went wrong"})
    }else{
        next()
    }
}

module.exports = errorHandler