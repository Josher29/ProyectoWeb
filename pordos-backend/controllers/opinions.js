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

exports.getOpinionByUserName = async(req,res) => {
    const username = req.params.username;
    var userOpinions = [];
    try{
        opinions.map((o)=>{
            if(o.user_name === username){
                userOpinions.push(o);
            }   
        });

        res.json(userOpinions);


    }catch(error){
        res.status(500).json({
            message:"Ocurrió un error al intentar recuperar las entradas.",
            error
        })
    }
}