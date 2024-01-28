const express = require('express')
const app = express()
const port = 8800

//Connect public folder เชื้อมต่อไฟล์ css และก็ image
app.use(express.static('public'))


app.set('view engine','ejs')


app.get("/",(req,res) =>{ 
    res.render('index')})

app.get('/properties', (req, res) => {
  res.render('proterties')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
