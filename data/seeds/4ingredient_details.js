
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_details').insert([
        {
          "recipe_id": 1,
          "ingredient_id": 11,
          "amount": "One",
          "measurement_unit": "Teaspoon(s)"
        }, {
          "recipe_id": 1,
          "ingredient_id": 12,
          "amount": "One half",
          "measurement_unit": "Teaspoon(s)"
        }, {
          "recipe_id": 1,
          "ingredient_id": 16,
          "amount": "One quarter",
          "measurement_unit": "Tablespoon(s)"
        }, {
          "recipe_id": 2,
          "ingredient_id": 9,
          "amount": "One eighth",
          "measurement_unit": "Cup(s)"
        }, {
          "recipe_id": 2,
          "ingredient_id": 22,
          "amount": "Two",
          "measurement_unit": "Pound(s)"
        }, {
          "recipe_id": 2,
          "ingredient_id": 1,
          "amount": "Three",
          "measurement_unit": "Ounces"
        }, {
          "recipe_id": 2,
          "ingredient_id": 14,
          "amount": "Sixteen",
          "measurement_unit": "Pound(s)"
        }, {
          "recipe_id": 2,
          "ingredient_id": 7,
          "amount": "Twenty",
          "measurement_unit": "Cup(s)"
        }, {
          "recipe_id": 2,
          "ingredient_id": 10,
          "amount": "Four",
          "measurement_unit": "Teaspoon(s)"
        }, {
          "recipe_id": 3,
          "ingredient_id": 6,
          "amount": "Three Quarter",
          "measurement_unit": "Teaspoon(s)"
        }, {
          "recipe_id": 3,
          "ingredient_id": 13,
          "amount": "One",
          "measurement_unit": "Cup(s)"
        }, {
          "recipe_id": 3,
          "ingredient_id": 2,
          "amount": "One half",
          "measurement_unit": "Cup(s)"
        }, {
          "recipe_id": 3,
          "ingredient_id": 8,
          "amount": "One quarter",
          "measurement_unit": "Tablespoon(s)"
        }, {
          "recipe_id": 3,
          "ingredient_id": 15,
          "amount": "One eighth",
          "measurement_unit": "Tablespoon(s)"
        }, {
          "recipe_id": 3,
          "ingredient_id": 4,
          "amount": "Two",
          "measurement_unit": "Pound(s)"
        }, {
          "recipe_id": 4,
          "ingredient_id": 6,
          "amount": "Three",
          "measurement_unit": "Tablespoon(s)"
        }, {
          "recipe_id": 4,
          "ingredient_id": 13,
          "amount": "Sixteen",
          "measurement_unit": "Tablespoon(s)"
        }, {
          "recipe_id": 4,
          "ingredient_id": 2,
          "amount": "Twenty",
          "measurement_unit": "Pound(s)"
        }, {
          "recipe_id": 5,
          "ingredient_id": 6,
          "amount": "Four",
          "measurement_unit": "Pound(s)"
        }, {
          "recipe_id": 5,
          "ingredient_id": 2,
          "amount": "Three Quarter",
          "measurement_unit": "Ounces"
        }, {
          "recipe_id": 6,
          "ingredient_id": 18,
          "amount": "One",
          "measurement_unit": "Pound(s)"
        }, {
          "recipe_id": 6,
          "ingredient_id": 19,
          "amount": "One half",
          "measurement_unit": "Cup(s)"
        }, {
          "recipe_id": 6,
          "ingredient_id": 14,
          "amount": "One quarter",
          "measurement_unit": "Pound(s)"
        }, {
          "recipe_id": 6,
          "ingredient_id": 17,
          "amount": "One eighth",
          "measurement_unit": "Tablespoon(s)"
        }, {
          "recipe_id": 6,
          "ingredient_id": 20,
          "amount": "Two",
          "measurement_unit": "Teaspoon(s)"
        }, {
          "recipe_id": 7,
          "ingredient_id": 1,
          "amount": "Three",
          "measurement_unit": "Tablespoon(s)"
        }, {
          "recipe_id": 7,
          "ingredient_id": 5,
          "amount": "Sixteen",
          "measurement_unit": "Ounces"
        }, {
          "recipe_id": 7,
          "ingredient_id": 22,
          "amount": "Twenty",
          "measurement_unit": "Teaspoon(s)"
        }, {
          "recipe_id": 7,
          "ingredient_id": 9,
          "amount": "Four",
          "measurement_unit": "Cup(s)"
        }, {
          "recipe_id": 7,
          "ingredient_id": 20,
          "amount": "Three Quarter",
          "measurement_unit": "Tablespoon(s)"
        }, {
          "recipe_id": 7,
          "ingredient_id": 3,
          "amount": "One",
          "measurement_unit": "Ounces"
        }, {
          "recipe_id": 7,
          "ingredient_id": 21,
          "amount": "One half",
          "measurement_unit": "Ounces"
        }
      ]);
    });
};
