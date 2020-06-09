const conect=require('../database/conection')

module.exports={

   async session(request,response){

      const {id}=request.body
      const ongs=await conect('ongs').
      where('id',id).select('name').first();
       
       if(!ongs){
           return response.status(400).json({error:'nao existe esta ong'})
       }
      return response.json(ongs);
   }

}