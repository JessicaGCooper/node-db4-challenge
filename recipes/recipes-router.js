const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();


//build http requests here
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes.', err });
    });
  });
  
  router.get('/:id/shoppinglist', (req, res) => {
    const recipe_id = req.params.id;
  
    Recipes.getShoppingList(recipe_id)
    .then(list => {
      if (list.length) {
        res.json(list);
      } else {
        res.status(404).json({ message: 'Could not find shopping list for given recipe.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list.', err });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    const recipe_id = req.params.id;
  
    Recipes.getInstructions(recipe_id)
    .then(instructions => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res.status(404).json({ message: 'Could not find instructions for given recipe.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe instructions.', err });
    });
  });


module.exports = router;