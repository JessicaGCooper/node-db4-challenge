
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          "id": 1,
          "name": "Wine - Red, Mouton Cadet",
          "brand_name": null
        }, {
          "id": 2,
          "name": "Butter",
          "brand_name": null
        }, {
          "id": 3,
          "name": "Potatoes - Mini Red",
          "brand_name": null
        }, {
          "id": 4,
          "name": "Milk",
          "brand_name": null
        }, {
          "id": 5,
          "name": "Vinegar - Tarragon",
          "brand_name": null
        }, {
          "id": 6,
          "name": "Flour",
          "brand_name": null
        }, {
          "id": 7,
          "name": "Goulash Seasoning",
          "brand_name": null
        }, {
          "id": 8,
          "name": "Eggs",
          "brand_name": null
        }, {
          "id": 9,
          "name": "Beef",
          "brand_name": null
        }, {
          "id": 10,
          "name": "Honey",
          "brand_name": null
        }, {
          "id": 11,
          "name": "Rum - Spiced, Captain Morgan",
          "brand_name": null
        }, {
          "id": 12,
          "name": "Kahlua",
          "brand_name": null
        }, {
          "id": 13,
          "name": "Granulated Sugar",
          "brand_name": null
        }, {
          "id": 14,
          "name": "Potatoes - Peeled",
          "brand_name": null
        }, {
          "id": 15,
          "name": "Chocolate Chips",
          "brand_name": null
        }, {
          "id": 16,
          "name": "Pineapple Juice",
          "brand_name": null
        }, {
          "id": 17,
          "name": "Soup Campbells - Italian Wedding",
          "brand_name": null
        }, {
          "id": 18,
          "name": "Chicken - Ground",
          "brand_name": null
        }, {
          "id": 19,
          "name": "Eggplant - Baby",
          "brand_name": null
        }, {
          "id": 20,
          "name": "Olive Oil",
          "brand_name": null
        }, {
          "id": 21,
          "name": "Sliced carrots",
          "brand_name": null
        }, {
          "id": 22,
          "name": "Beef broth",
          "brand_name": null
          }
        }
      ]);
    });
};
