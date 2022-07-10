const opinions = require("../../proyecto-web/src/Data/Posts.json") //Get Opinions from JSON

exports.getAllOpinions = async (req, res) => {
    try{
        res.json(opinions) //200
    }catch(error){
        res.status(500).json({
            message: "Ocurrió un error",
            error,
          });
    }

}