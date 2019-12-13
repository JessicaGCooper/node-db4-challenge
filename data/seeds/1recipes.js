
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          "id": 1,
          "name": "Tropical Bomb - Mixed Alcoholic Drink",
          "description": null
        }, {
          "id": 2,
          "name": "Beef Surprise",
          "description": null
        }, {
          "id": 3,
          "name": "Chocolate Chip Cookies",
          "description": null
        }, {
          "id": 4,
          "name": "Short Bread Cookies",
          "description": null
        }, {
          "id": 5,
          "name": "Dumplings",
          "description": null
        }, {
          "id": 6,
          "name": "Chicken Eggplant Casserole",
          "description": null
        }, {
          "id": 7,
          "name": "Beef Roast and Potatoes",
          "description": null
        }
      ]);
    });
};
