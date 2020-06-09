const express=require('express');
 const routes=express.Router();
 const OngsController=require('./controller/OngsController')
 const incidentController=require('./controller/IncidentController')
 const profileController=require('./controller/profileController')
 const SectionController=require('./controller/SectionController')
 const adimController=require('./controller/adimController')


routes.get('/ongs',OngsController.index)
routes.get('/incidents',incidentController.index)
routes.get('/incidents/:id',incidentController.delete)
routes.get('/profile',profileController.index)
routes.post('/session',SectionController.session)
 routes.post('/ongs',OngsController.store)
 routes.post('/incidents',incidentController.create)
routes.post('/adim', adimController.createAdim)
routes.get('/list', adimController.list)
routes.get('/list/:id', adimController.delete)
routes.put('/update/:id', adimController.update)
routes.post('/section', adimController.section)
routes.delete('/ongs/:id', OngsController.delete)
 module.exports=routes;