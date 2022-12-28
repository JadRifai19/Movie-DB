const express = require ('express')
const app = express()
const port = 3000
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get('/' ,(req, res) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log(`listening on port of ${port}`)
  })

app.get ('/test', (req, res) => {
    res.json({status:200, message:"ok"})
})

app.get('/time', (rep, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const seconds = currentTime.getSeconds();
    res.json({status:200 , message:'${hours}:${seconds}'})
})

app.get('/hello/id', (rep,res) =>{
    res.json({ status:200, message:`Hello, ${id}`})
})

app.get('/search?s=SEARCH' , (rep, res) => {
    const search = req.query.search    
    if (search){
        res.status(200).json({status:200, message:"ok", data:search})}
    else {
        res.status(500).json({status: 500, error:true, message:"you have to provide a search"})
    }    
})

app.get('/movies/create' , (req, res) => {})

app.get('movies/read' , (req, res) => {
    res.json({status:200, data:movies})
})

app.get('movies/edit' , (req, res) => {})

app.get('movies/delete' , (req, res) => {})