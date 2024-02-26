const express = require("express");
const app = express();
app.get("/", (req, res)=> res.send("Server is working correctly"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log( 'Server has started  on port ${PORT}');

})