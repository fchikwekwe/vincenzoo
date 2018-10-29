const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const animals = [
    {
        name: "Tim",
        species: "Whale",
        gender: 'male',
        age: 18,
        animalId: 1
    },
    {
        name: "Vincenzo",
        species: "Snake",
        gender: 'male',
        age: 18,
        animalId: 2
    },
    
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}));


app.get('/zoo/animals', function(req, res) {
    res.status(200).send(animals);
})

app.get('/zoo/animals/:animalId', function(req, res) {

    for(animal in animals){
        if (animals[animal].animalId == req.params.animalId){
           return res.status(200).json(animals[animal]); 
        }
    }

    return res.status(404).json({err: "Animal could not be found"});
});

app.post('/zoo/animals', function(req, res) {
    const animal = req.body;
    let animalId = animals.length + 1

    animals.push(animal);

    return res.status(200).json(animal);

})

app.put('/zoo/animals/:animalId', function(req, res) {
    const updatedAnimal = req.body;

    for(animal in animals) {
        let currentAnimal = animals[animal];
        if (currentAnimal.animalId == updatedAnimal.animalId) {
            animals[animal] = updatedAnimal;
            return res.status(200).json(updatedAnimal)
        }
    }
    
    return res.status(404).json({err: "Animal could not be found"})
});

app.delete('/zoo/animals/:animalId', function(req, res) {
    for(animal in animals) {
        let currentAnimal = animals[animal];
        if(currentAnimal.animalId == req.params.animalId) {
            delete animals[animal];
            return res.status(200).json(currentAnimal)
        }
    }

    return res.status(404).json({err: "Animal could not be found"})
})


app.listen(3000, function() {
    console.log('App is listening on port 3000')
})
