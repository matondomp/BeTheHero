const conect=require('../database/conection');

module.exports={

    async index(request,response){

        const ong_id=request.headers.authorization;

        const incidents=await conect('incidents').where('ong_id',ong_id)
        .select('*')
        
        return response.json({incidents})
    }
}