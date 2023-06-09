let myFavorites = [];    // [ {id:1}, {id:3},...]

const postFav = (req,res) =>{
    myFavorites.push(req.body);   //recibe por Body un obj q es el personaje entero y me lo agrego c push
    return res.status(200).json(myFavorites);   
}

const deleteFav = (req, res) =>{
    const {id} = req.params;
    myFavorites = myFavorites.filter (   // voy a pisar myFavorites y con filter creo un nvo [] segun la f dada 
        char => char.id !== id
    )
    return res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav};
