const themes = require("../../proyecto-web/src/Data/Themes.json") //Get Themes from JSON


exports.getAllThemes = async (req, res) => {
    try{
        res.json(themes) //200
    }catch(error){
        res.status(500).json({
            message: "Ocurrió un error",
            error,
          });
    }

}

exports.createTheme = async (req,res) => {
    try{
        const userPayload = req.body;
        var error = false;
        const newTheme = {
            name:userPayload.name,
            description:userPayload.description,
            photo:userPayload.photo
        }

        themes.map((t)=>{
            if(t.name == newTheme.name){
                error = true;
                res.status(409).send("Este tema ya existe, intenta opinando en él");
                return;
            }
        })
        if(error){
            return;
        }
       
        res.json(newTheme)
    }catch(error){
        res.status(500).json({
            message: "Ocurrió un error",
            error,
        });
    }
    
}