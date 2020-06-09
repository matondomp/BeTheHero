

exports.up = function(knex) {
    return knex.schema
   .createTable('adim',(table)=>{
       table.increments('id')
     table.string('name',255).notNullable().unique()
     table.string('email', 255).notNullable().unique()
       table.string('passeworld', 150).notNullable()

   })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('adim')
};
