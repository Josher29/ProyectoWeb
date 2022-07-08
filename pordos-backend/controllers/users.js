const jwt = require("jsonwebtoken");
const users = require("../../proyecto-web/src/Data/Users.json") //Get Users from JSON

exports.loginUser = async (req, res) => {
    // #swagger.tags = ['Users']
    try {
      const userPayload = req.body;
      var user;
      users.map((u) =>{
            if(u.email == userPayload.email){
               user = u;
            }
      });
      if (!user || (user.password != userPayload.password) ){
        res.status(401).send("Invalid credentials");
        return;
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_KEY,
        {
          expiresIn: "5m",
        }
      );
      delete user.password;
      const result = {
        user,
        token,
      }
      
      res.json(result);
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  };