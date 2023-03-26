const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    // jwt.verify(token,"masai",(err,decoded)=>{
    // })
    // OR

    const decoded = jwt.verify(token, "masai");

    if (decoded) {
      //Adding userID to body
      req.body.userID = decoded.userID;
      // console.log(decoded);
      next();
    } else {
      res.status(400).send({ msg: "Please login first!" });
    }
  } else {
    res.status(400).send({ msg: "Please login first!" });
  }
};

module.exports = { auth };
