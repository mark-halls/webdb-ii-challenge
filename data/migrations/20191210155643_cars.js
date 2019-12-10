exports.up = function(knex) {
  return knex.schema.createTable(`cars`, cars => {
    cars.increments();
    cars
      .string(`vin`, 255)
      .notNullable()
      .unique()
      .index();
    cars.string(`make`, 255).notNullable();
    cars.string(`model`, 255).notNullable();
    cars.integer(`mileage`).notNullable();
    cars.string(`transmission`, 255);
    cars.string(`title_status`, 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(`cars`);
};
