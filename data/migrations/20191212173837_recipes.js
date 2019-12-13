exports.up = function(knex) {
    return knex.schema
        .createTable("recipes", tbl => {
            tbl.increments();

            tbl.string("name", 255)
                .notNullable()
                .unique();

            tbl.string("description", 300)
        })
        .createTable("ingredients", tbl => {
            tbl.increments();

            tbl.string("name", 255)
                .notNullable()
                .unique();

            tbl.string("brand_name", 255)
        })
        .createTable("recipe_steps", tbl => {
            tbl.increments();

            tbl.integer("step_number")
                .unsigned()
                .notNullable();

            tbl.string("description", 400)
                .notNullable();

            // Foreign Key
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE") // CASCADE, RESTRICT, DO NOTHING, SET NULL,
                .onUpdate("CASCADE");
        })
        .createTable("ingredient_details", tbl => {
            tbl.primary(["recipe_id", "ingredient_id"]);

            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE") // CASCADE, RESTRICT, DO NOTHING, SET NULL,
                .onUpdate("CASCADE");

            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("CASCADE") // CASCADE, RESTRICT, DO NOTHING, SET NULL,
                .onUpdate("CASCADE");

            tbl.string("amount", 200)
                .notNullable();

            tbl.string("measurement_unit", 50)
                .notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipe_steps')
      .dropTableIfExists('ingredient_details');
  };