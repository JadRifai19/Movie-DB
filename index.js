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
});

app.listen(port, () => {
    console.log(`listening on port of ${port}`)
});

app.get ('/test', (req, res) => {
    res.json({status:200, message:"ok"})
});

app.get('/time', (rep, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const seconds = currentTime.getSeconds();
    res.json({status:200 , message:'${hours}:${seconds}'})
});

app.get('/hello/id', (rep,res) =>{
    res.json({ status:200, message:`Hello, ${id}`})
});

app.get('/search?s=SEARCH' , (rep, res) => {
    const search = req.query.search    
    if (search){
        res.status(200).json({status:200, message:"ok", data:search})}
    else {
        res.status(500).json({status: 500, error:true, message:"you have to provide a search"})
    }    
});

app.get('/movies/add' , (req, res) => {});

app.get('movies/get' , (req, res) => {
    res.json({status:200, data:movies})
});

app.get('movies/edit' , (req, res) => {});

app.get('movies/delete' , (req, res) => {});

app.get('/movies/read/by-date', (rep, res) => {
    res.json({status:200, data:movies})
});

app.get('/movies/read/by-rating', (rep, res) => {
    res.json({status:200, data:movies})
});

app.get('/movies/read/by-title', (rep, res) => {
    res.json({status:200, data:movies})
});

app.get('/movies/read/id/:id' , (req, res) =>{
    const id = parseInt(req.params.id);
    const movie = movies[id - 1];
    if (movie) {
        res.status(200).json({status:200, data:movie})
    }
    else {
        res.status(404).json({status:404, error:true, message:'the movie ${ID} does not exist'})
    }
});

app.post('movie/add?title=<TITLE>&year=<YEAR>&rating=<RATING>' , (req, res) => {
    const title = req.query.title
    const year = req.query.year
    const rating = req.query.rating 
    if (!title || !year || year.length !==4 || isNaN(year)) {
    res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'}) 
}
    else {
        const newmovie = {title, year,rating: rating || 4}
        movies.push(newmovie)
        res.json({status:200, data: movies})
    }
});

app.delete('movies/delete/:id', (req, res) => {
    const id= req.params.id;
    if (id> movies.length) {
        res.json({status:404, error:true, message:'the movie ${id} does not exist'})
    }
    else {
        movies.splice(id-1, 1);
        res.json({status: 200, data: movies });
      }
});

app.patch("/movies/update/<ID>?title=<NEW_TITLE>", (req, res) =>{
    const id = parseInt(req.params.id)
    if (id>movies.length) {
        res.json({status: 404, error: true, message: `the movie ${id} does not exist`})
    }
    else {
        const movie = movies[id - 1]
        if (req.query.title) movie.title = req.query.title
        if (req.query.rating) movie.rating = req.query.rating
        if (req.query.year) movie.year = req.query.year
        res.json({status:200, data: movies}) 
    }
});