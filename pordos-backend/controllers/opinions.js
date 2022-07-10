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

exports.getOpinionByTheme = async(req,res) => {
    const theme = req.params.theme;
    var themeOpinions = [];
    try{
        opinions.map((o)=>{
            if(o.theme_name === theme){
                themeOpinions.push(o);
            }   
        });

        res.json(themeOpinions);

    }catch(error){
        res.status(500).json({
            message:"Ocurrió un error al intentar recuperar las entradas del tema.",
            error
        })
    }
}

exports.postOpinion = async(req,res) => {
    try{
        res.json(req.body);

    }catch (error) {
        res.status(500).send("Server error: " + error);
    }
}