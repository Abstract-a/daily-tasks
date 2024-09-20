const express = require('express')

const app = experss()
const port = 3000
app.get('./', (req,res) => {res.send("hellow")})

app.listen(port, ()=> {console.log("server running on port 3000")})

