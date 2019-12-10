exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "asapoufsdaupioaewdrf",
          make: "Toyota",
          model: "Camry",
          mileage: 50000,
          transmission: "manual",
          title_status: "clean"
        }
      ]);
    });
};
