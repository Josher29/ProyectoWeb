const users = require("../../proyecto-web/src/Data/users")

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
      if (!user || !(user.password != userPayload.password) ){
        res.status(401).send("Invalid credentials");
        return;
      }
      res.json(user);
      /*
      const token = jwt.sign(
        { userId: user.id, roles: rolesIds },
        process.env.JWT_KEY,
        {
          expiresIn: "5m",
        }
      );
      const result = {
        ...user.toJSON(),
        token,
      }*/
      //res.json(result);
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  };