let id = 11;
let favorites = [];
let recipes = [
    {
        id: 1,
        img: '',
        title: 'Stir Fry',
        category: 'Chinese',
        stars: 4.2 + ' out of 5',
        ingredients: '',
        instructions: ''
    },
    {
        id: 2,
        img: '',
        title: 'Fried Chicken',
        category: 'American',
        stars: 4.5 + ' out of 5',
        ingredients: '',
        instructions: ''
    }, {
        id: 3,
        img: '',
        title: 'Tacos',
        category: 'Mexican',
        stars: 4.3 + ' out of 5',
        ingredients: '',
        instructions: ''
    }, {
        id: 4,
        img: '',
        title: 'Tuna Nigiri',
        category: 'Japanese',
        stars: 5 + ' out of 5',
        ingredients: 'Sushi rice, Fresh Tuna (sushi grade)',
        instructions: ''
    }, {
        id: 5,
        img: '',
        title: 'Boiled Water',
        category: 'American',
        stars: 10 + ' out of 5',
        ingredients: 'water',
        instructions: 'Bring water to a boil over medium high heat until signs of bubbling water is shown.'
    },
    {
        id: 6,
        img: 'http://www.foodpost.ca/wp-content/uploads/2017/06/chinese-fried-rice-780x520.jpg',
        title: 'Fried Rice',
        category: 'Chinese',
        stars: 3.9 + ' out of 5',
        ingredients: '',
        instructions: ''
    },
    {
        id: 7,
        img: '',
        title: 'Beef Stew',
        category: 'American',
        stars: 4.2 + ' out of 5',
        ingredients: '',
        instructions: ''
    },
    {
        id: 8,
        img: '',
        title: 'Tiramisu',
        category: 'Italian',
        stars: 5 + ' out of 5',
        ingredients: '',
        instructions: ''
    },
    {
        id: 9,
        img: '',
        title: 'Prawn and Fennel Bisque',
        category: 'French',
        stars: 3.5 + ' out of 5',
        ingredients: 'Tiger prawns, Olive oil, Onion, Fennel, Carrots, Dry white wine, Brandy, Fish stock, paprika, Double cream, Prawns',
        instructions: 'Shell the prawns, then fry the shells in the oil in a large pan for about 5 mins. Add the onion, fennel and carrots and cook for about 10 mins until the veg start to soften. Pour in the wine and brandy, bubble hard for about 1 min to drive off the alcohol, then add the tomatoes, stock and paprika. Cover and simmer for 30 mins. Meanwhile, chop the prawns. Blitz the soup as finely as you can with a stick blender or food processor, then press through a sieve into a bowl. Spend a bit of time really working the mixture through the sieve as this will give the soup its velvety texture. Tip back into a clean pan, add the prawns and cook for 10 mins, then blitz again until smooth. You can make and chill this a day ahead or freeze it for 1 month. Thaw ovenight in the fridge. To serve, gently reheat in a pan with the cream. If garnishing, cook the 8 prawns in a little butter. Spoon into small bowls and top with the prawns and snipped fennel fronds.'
    },
    {
        id: 10,
        img: 'http://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
        title: 'Spaghetti Bolognese',
        category: 'Italian',
        stars: 4.1 + ' out of 5',
        ingredients: '"onions", "olive oil", "garlic", "lean minced beef", "mushrooms", "dried oregano", "tomatoes", "hot beef stock", "tomato puree", "worcestershire sauce", "spaghetti", "parmesan"',
        instructions: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
    }
]
module.exports = {

    create: (req, res, next) => {
        let { title, img, category, stars, ingredients, instructions } = req.body
        recipes.push({ id, img, title, category, stars, ingredients, instructions });
        id++
        res.status(200).send(recipes);
    },

    save:(req, res, next) => {
        let recipeID = parseInt(req.params.id);
        let saveRecipe = null;
        let index = 0;
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].id === recipeID) {
                saveRecipe = recipes[i];
                index = i;
            }
        }
        favorites.push(saveRecipe);
        res.status(200).send(favorites);
    },

    read: (req, res, next) => {
        res.status(200).send(recipes)
    },

    readFavorites:(req, res, next) =>{
        res.status(200).send(favorites)
    },

    readCategory:(req,res,next) =>{
        let targetCategory = req.params.category;
        console.log(targetCategory);
        let newRecipes = []
        for(let i =0; i < recipes.length; i++){
            if(recipes[i].category == targetCategory){
                newRecipes.push(recipes[i])
            }
        }
        res.status(200).send(newRecipes);
    },

    update: (req, res, next) => {
        let recipeID = parseInt(req.params.id);
        let updateRecipe = null;
        let index = 0;
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].id === recipeID) {
                updateRecipe = recipes[i];
                index = i;
            }
        }
        recipes[index].img = req.body.img
        recipes[index].title = req.body.title
        recipes[index].category = req.body.category
        recipes[index].ingredients = req.body.ingredients
        recipes[index].instructions = req.body.instructions
        res.status(200).send(recipes);
    },

    delete: (req, res, next) => {
        // let deleteID = req.params.id;
        // recipeIndex = recipes.findIndex( recipe => recipe.id == deleteID);
        // recipes.splice(recipeIndex, 1);
        favorites = favorites.filter(recipe => {
            return recipe.id !== parseInt(req.params.id);
        })

        res.status(200).send(favorites);
    }
}

// ** LOOK INTO THIS LATER **
// for(key in obj){
//     if(req.body.hasOwnProperty(key)){
//         recipes[key] = req.body[key]
//     }
// }