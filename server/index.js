const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , app = express()
    , recipeCtrl = require('./controller/controller')

app.use(bodyParser.json());


app.get(`/api/recipes`, recipeCtrl.read);
app.get(`/api/recipes/favorites`, recipeCtrl.readFavorites);
app.get(`/api/recipes/:category`, recipeCtrl.readCategory);

app.post(`/api/recipes`, recipeCtrl.create);

app.put(`/api/recipes/favorites/:id`, recipeCtrl.save);
app.put(`/api/recipes/:id`, recipeCtrl.update);


app.delete(`/api/recipes/:id`, recipeCtrl.delete);




const PORT = 3001;
app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`))