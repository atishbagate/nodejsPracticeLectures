const exp = require('express');
const res = require('express/lib/response');
const importedRoute = require("./routes/things")
const middlewareUseInPath = require("./routes/middlewareRoute")
const app = exp();

// if anything comes from strting impRoute path name -> 
// forward it into imported routes.
app.use("/impRoute",importedRoute)
app.use("/middlewareUse",middlewareUseInPath)
app.route('/homePage')
.get((req,res)=>{
    res.send('you send the get request on this path.')
})
.post((req,res)=>{
    res.send("you send the post request on this path.")
})

app.listen(8000);