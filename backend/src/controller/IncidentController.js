const conect=require('../database/conection');

module.exports={

   async index(request,response){
       const {pages=1}=request.query

    const [count]=await conect('incidents').count()
    
       const list=await conect('incidents')
       .join('ongs','ongs.id','=','incidents.ong_id')
       .limit(5)
       .offset((pages-1)*5)
           .select(['incidents.*', 'ongs.name','ongs.email','ongs.whatsup','ongs.city','ongs.uf'])

       response.header('tatal-elements',count['count(*)'])

       return response.json({list})
   },

   async create(request,response){
       
       const {title,description,value}=request.body;
       const ong_id=request.headers.authorization;

      const [id]= await conect('incidents').insert({
        title,
        description,
        value,
        ong_id

       });

        return response.json({id})
   },

   async delete(request,response){

      const {id}=request.params
      const ong_id=request.headers.authorization

       const value=await conect('incidents').where('id',id)
       .select('ong_id').first()
      
       if(value.ong_id!=ong_id){
           return response.status(401).json({error:'erro ao pagar caso'})
       }
       await conect('incidents').where('id',id).delete()
         
         return response.status(204).send()

   }




}