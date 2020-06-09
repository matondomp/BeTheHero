import React ,{useState,useEffect,Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../esset/logo.svg'
import {FiPower,FiTrash2} from 'react-icons/fi'
import './style.css'
import api from '../../service/api';
import { IoIosAddCircle} from 'react-icons/io'

export default function Profile(){
   
    const [profileData,setProfiledata]=useState([]);
      const ongName=localStorage.getItem('ongsName');
   const ongId=localStorage.getItem('ongs');

       useEffect(()=>{
            api.get('/profile',{
                headers:{
                    Authorization: ongId,
                }
            }).then(response=>{
                setProfiledata(response.data.incidents)
              
            })
           api.get(`/incidents/`, {
               headers: {
                   Authorization: ongId,
               }
           }).then(response =>{
               console.log(response)
               console.log(response.headers['tatal-elements'])
           })
          
       }, [ongId]);

   
         function deleteIncident(id) {
                  
           try{
           api.get(`/incidents/${id}`,{
                 headers:{
                 Authorization: ongId,
             }
             })
               
                                    
           }catch(err){
               console.log("errooo")  
           }
        
      }         
       

      return(
        <div className="profile-container">
            <header>
                <img src={Logo} alt="erro" />
      <span>ONGS:<strong>{ongName}</strong> </span>
                <Link to="/incidents/new" >
                      <button type="button" >
                      <IoIosAddCircle size={20} color="#1b6d0b" />
                      </button>
                 </Link>
                <Link to="/">
                <button type="button" >
                      
                         <FiPower size={18} color="#e02041"/>
                   
                </button> 
                </Link>
            </header>
            <h1>Casos cadastrado</h1>
            <ul>       
                  {profileData.map(incidents => (
                      <li key={incidents.id}>
                          <strong>CASO:</strong>
                          <p>{incidents.title}</p>
                         <strong>DESCRICAO:</strong>
                          <p>{incidents.description}</p>
                         <strong>VALOR:</strong>
                          <p>{incidents.value}</p> 
                          <form onSubmit={Profile}>
                          <button type="submit"
                          
                             onClick={()=>deleteIncident(incidents.id) } >
                             <FiTrash2 size={20} color="#e02041 " />
                         </button>
                         </form>
                     </li>   
                   
                  ) ) }
               
            </ul>
           
        </div>
      
   )

}