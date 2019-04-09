const exporess = require("express");

const router = exporess.Router();

router.get("/", (req,res,next)=>{
    res.send("<h1>Hello from Express</h1>");
});

module.exports = router;