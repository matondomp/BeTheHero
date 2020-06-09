import React,{useState} from 'react';
import Route, {Link,useHistory} from 'react-router-dom';
import './style.css';
import Img from '../../esset/logo.svg';
import { FiLogIn} from 'react-icons/fi'
import api from '../../service/api'

function Adim(){
    
    const [email,setEmail]=useState('')
    const [passeworld, setPasseWorld] = useState('')
    const renderLogin=useHistory()
    

   async function login(e){
        e.preventDefault()

        const datas={

            email,
            passeworld
        }
    try{
       const response= await api.post('/section',datas)
        alert('lagado com sucesso')
          sessionStorage.setItem('name',response.data.db.name)
        
        renderLogin.push('/controlAd')
    }catch(err){
        console.log(`erro ao logar ${err}`)
    }
       

    }
     


    return (
        <div className="adim-container">
           
              <section>
                  <div>
                      <h1>Faça o seu login ADIM</h1>
                      <img src={Img} alt=""/>

                    <Link to="/resgister">
                        <FiLogIn size={18} color="#e02041" />não esto resgistado
                     </Link>
                  </div>
                
                   <form onSubmit={login}>
                    
                    <input type="email"  placeholder="E-mail"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                    />
                   
                    <input type="password" placeholder="Senha"
                        value={passeworld}
                        onChange={e => setPasseWorld(e.target.value)}
                    />
                    
                     <div>
                        <input type="checkbox" className="check"/>
                        <button type="submit" class="btn btn-filter">Entrar</button> 
                     </div>
                    
                   </form>
              </section>
              
        </div>
      
    );
}
export default Adim;