const knex=require('knex')
const configuration=require('../../knexfile')

    const conect=knex(configuration.development)

module.exports=conect