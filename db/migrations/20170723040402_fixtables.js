exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('orders', function (table) {
      table.string('phone').alter();
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('orders', function (table) {
      table.integer('phone').alter();
    }),
  ]);
};
