const conect=require('../database/conection')

module.exports={


    async createAdim(request,response){
       
        const { name, email, passeworld}=request.body

       const creat=await conect('adim')
         .insert({
           name,
           email,
           passeworld,

         })

        return response.json({ creat, name, email, passeworld})
    },

    async list(req,res){
       
        const list=await conect('adim')
         .select('*')

       return res.json({list})
    },

    async delete(req,res){
       
        const {id}=req.params

        await conect('adim')
        .where('id',id).delete()
       return res.status(200).send()
    },

    async update(req,res){
        
        const {id}=req.params
      const { name,email,passeworld}=req.body
  try{

     const update= await conect('adim')
     .where('id',id)
       .update({
                name,
               email,
               passeworld
            
           }
          )

        return res.json({id,name})
  }catch(err){
     alert(`erro ao atulizar dados ${err}`)
  }

    },

    async section(req,res){

       const {email,passeworld}=req.body
     
       try{
          const db = await conect('adim').where({email: email ,
           passeworld: passeworld
          })
            .select('name').first();
         if (!db){
           return res.status(400).json('erro ao logar')
          
         }else{
            return res.status(200).json({ db})

         }
       
       }catch(err){

         console.log(`erro de login tente de novo ${err}`)
       }
     
    }

}