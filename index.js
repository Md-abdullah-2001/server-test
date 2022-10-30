const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.get('/data', (req, res) => {
          res.send("Data server is running on")
})

app.use(cors())



const users = [
          { name: 'Abdullah', email: 'abdullah@gmail.com' },
          { name: 'Abdul', email: 'abdul@gmail.com' },
          { name: 'Adil', email: 'Adil@gmail.com' },
          { name: 'salim', email: 'salim@gmail.com' },
]
app.get('/data', (req, res) => {
          res.send(users)
})


app.listen(() => {
          console.log('server running on', port);
})