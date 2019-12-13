const db = require("../data/db-Config.js")

module.exports = {
   //list helper functions here
   getRecipes,
   getShoppingList,
   getInstructions
}

// - `getRecipes()`: should return a list of all recipes in the database.
function getRecipes(){
    return db("recipes")
}

// --getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// select r.name as RecipeName
// , ing.name as IngredientName
// , ind.amount as IngredientAmount
// , ind.measurement_unit as MeasurementUnit
// from recipes as r
// join ingredient_details as ind
//     on r.id = ind.recipe_id
// join ingredients as ing
//     on ind.ingredient_id = ing.id
// where r.id = 1;
function getShoppingList(recipe_id){
    return db("recipes as r")
    .select("r.name as recipe_name", "ing.name as ingredient_name", "ind.amount as ingredient_amount", "ind.measurement_unit as measurement_unit")
    .join("ingredient_details as ind", "r.id", "ind.recipe_id")
    .join("ingredients as ing", "ind.ingredient_id", "ing.id")
    .where("r.id", recipe_id)
}

// --`getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
// select r.id as recipe_id
//     , r.name as recipe_name
//     , rs.step_number
//     , rs.description
// from recipes as r
// join recipe_steps as rs
//     on r.id = rs.recipe_id
// where recipe_id = 4
// order by rs.step_number;
function getInstructions(recipe_id){
    return db("recipes as r")
    .select("r.name as recipe_name", "rs.step_number", "rs.description as instruction")
    .join("recipe_steps as rs", "r.id", "rs.recipe_id")
    .where("r.id", recipe_id)
    .orderBy("rs.step_number")
}