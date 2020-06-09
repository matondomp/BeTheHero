const crypto=require('crypto')
const conect=require('../database/conection')

module.exports={

  async index(request,response){
      const list=await conect('ongs').select('*')

   return response.json({list})
  },
  
   async store(request,response){

       
     const {name,email,whatsup,city,uf}=request.body
    
     const id=crypto.randomBytes(4).toString('HEX')
   
      await  conect('ongs').insert({
           id,
           name,
           email,
           whatsup,
           city,
           uf
      })

 return response.json({id})

   },

   async delete(req,res){

    const {id}=req.params

     const db = await conect('ongs').where('id', id)
              .delete()
        return  res.json({db})
   }


}