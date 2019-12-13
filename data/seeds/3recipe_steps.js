
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {
          "id": 1,
          "step_number": 1,
          "description": "Get out shaker",
          "recipe_id": 1
        }, {
          "id": 2,
          "step_number": 2,
          "description": "Add rum",
          "recipe_id": 1
        }, {
          "id": 3,
          "step_number": 3,
          "description": "Add kaluah",
          "recipe_id": 1
        }, {
          "id": 4,
          "step_number": 4,
          "description": "Add pineapple juice",
          "recipe_id": 1
        }, {
          "id": 5,
          "step_number": 5,
          "description": "Shake well",
          "recipe_id": 1
        }, {
          "id": 6,
          "step_number": 1,
          "description": "Preheat oven",
          "recipe_id": 2
        }, {
          "id": 7,
          "step_number": 2,
          "description": "Chop beef",
          "recipe_id": 2
        }, {
          "id": 8,
          "step_number": 3,
          "description": "Add beef broth",
          "recipe_id": 2
        }, {
          "id": 9,
          "step_number": 4,
          "description": "Add Red Wine",
          "recipe_id": 2
        }, {
          "id": 10,
          "step_number": 5,
          "description": "Mix liquids",
          "recipe_id": 2
        }, {
          "id": 11,
          "step_number": 6,
          "description": "Slice potatoes thin and place at bottom of pan",
          "recipe_id": 2
        }, {
          "id": 12,
          "step_number": 7,
          "description": "Add layer of beef",
          "recipe_id": 2
        }, {
          "id": 13,
          "step_number": 8,
          "description": "Add goulash seasoning",
          "recipe_id": 2
        }, {
          "id": 14,
          "step_number": 9,
          "description": "Drizzle honey on top",
          "recipe_id": 2
        }, {
          "id": 15,
          "step_number": 10,
          "description": "Bake for one hour at 350 degrees",
          "recipe_id": 2
        }, {
          "id": 16,
          "step_number": 1,
          "description": "Add milk",
          "recipe_id": 3
        }, {
          "id": 17,
          "step_number": 2,
          "description": "Add flour",
          "recipe_id": 3
        }, {
          "id": 18,
          "step_number": 3,
          "description": "Add sugar",
          "recipe_id": 3
        }, {
          "id": 19,
          "step_number": 4,
          "description": "Add melted butter",
          "recipe_id": 3
        }, {
          "id": 20,
          "step_number": 5,
          "description": "Add eggs",
          "recipe_id": 3
        }, {
          "id": 21,
          "step_number": 6,
          "description": "Add chocolate chips",
          "recipe_id": 3
        }, {
          "id": 22,
          "step_number": 7,
          "description": "Mix well",
          "recipe_id": 3
        }, {
          "id": 23,
          "step_number": 8,
          "description": "Bake for 15 minutes at 350 degrees or until slightly browned.",
          "recipe_id": 3
        }, {
          "id": 24,
          "step_number": 1,
          "description": "Preheat over",
          "recipe_id": 4
        }, {
          "id": 25,
          "step_number": 2,
          "description": "Add flour",
          "recipe_id": 4
        }, {
          "id": 26,
          "step_number": 3,
          "description": "Add sugar",
          "recipe_id": 4
        }, {
          "id": 27,
          "step_number": 4,
          "description": "Add butter",
          "recipe_id": 4
        }, {
          "id": 28,
          "step_number": 5,
          "description": "Stir twenty times in bowl",
          "recipe_id": 4
        }, {
          "id": 29,
          "step_number": 6,
          "description": "Bake for 20 minutes at 350 degrees",
          "recipe_id": 4
        }, {
          "id": 30,
          "step_number": 1,
          "description": "Add flour",
          "recipe_id": 5
        }, {
          "id": 31,
          "step_number": 2,
          "description": "Add butter",
          "recipe_id": 5
        }, {
          "id": 32,
          "step_number": 3,
          "description": "Add water",
          "recipe_id": 5
        }, {
          "id": 33,
          "step_number": 4,
          "description": "Roll dough",
          "recipe_id": 5
        }, {
          "id": 34,
          "step_number": 5,
          "description": "Boil for 20 minutes or until cooked through",
          "recipe_id": 5
        }, {
          "id": 35,
          "step_number": 1,
          "description": "Brown chicken in pan with olive oil",
          "recipe_id": 6
        }, {
          "id": 36,
          "step_number": 2,
          "description": "Slice eggplants",
          "recipe_id": 6
        }, {
          "id": 37,
          "step_number": 3,
          "description": "Chop potatoes",
          "recipe_id": 6
        }, {
          "id": 38,
          "step_number": 4,
          "description": "Mix chicken, eggplant, and potatoes and put in casserole dish",
          "recipe_id": 6
        }, {
          "id": 39,
          "step_number": 5,
          "description": "Pour italian soup over all",
          "recipe_id": 6
        }, {
          "id": 40,
          "step_number": 6,
          "description": "Bake for one hour at 350 degrees",
          "recipe_id": 6
        }, {
          "id": 41,
          "step_number": 1,
          "description": "Mix red wine, vinegar, and beef broth",
          "recipe_id": 7
        }, {
          "id": 42,
          "step_number": 2,
          "description": "Brown beef roast in olive oil",
          "recipe_id": 7
        }, {
          "id": 43,
          "step_number": 3,
          "description": "Put roast, red potatoes, and carrot slices into dutch oven.",
          "recipe_id": 7
        }, {
          "id": 44,
          "step_number": 4,
          "description": "Pour liquid mixture over.",
          "recipe_id": 7
        }, {
          "id": 45,
          "step_number": 5,
          "description": "Bake for one and half hours at 350 degrees or until beef is 165 degrees at center.",
          "recipe_id": 7
        }
      ]);
    });
};
