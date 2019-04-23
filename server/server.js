const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res, next)=>{
    res.send({"name":"Ambika"})
})
app.listen(PORT, ()=>{
    console.log(`Server Start at ${PORT}`);
})