import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom'
import './style.css';
import heroImg from '../../esset/heroes.png';
import logoImg from '../../esset/logo.svg';
import api from '../../service/api'


function Login(){
     const [id,setId]=useState('');
     
      const history=useHistory();
 async function henderLogin(e){
     e.preventDefault();

     
     try{
         const response = await api.post('session',{id})
      
         localStorage.setItem('ongs',id)
         localStorage.setItem('ongsName', response.data.name);
         history.push('/profile')
         
     }catch(err){
         console.log("erro de login")
     }
  }
  


    return(
        
        <div className="logo-container">
            <section className="form" >

                <img src={logoImg} alt="be the hero" />
                
                <form onSubmit={henderLogin}>
                    <h1>Faça o seu login</h1>
                    <input placeholder="seu id"
                       value={id}
                     onChange={e=>setId(e.target.value)}
                    />
                    <button className="btn" type="submit">entrar</button>
                    
                    <Link to="/register" >
                     <FiLogIn size={18} color="#e02041" /><a>não esto resgistado</a>
                     </Link>
                </form>
            </section>

            <img src={heroImg} alt="hero"/>
        </div>
    
       
        );

}

export default Login;