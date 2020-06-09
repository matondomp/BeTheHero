import React,{useState} from 'react';
import logoImg from '../../esset/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link,useHistory } from 'react-router-dom'
import './style.css'
import api from '../../service/api';

function Resgister()
{

    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [whatsup, setWhatsup] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history=useHistory(); 

   async function HenderResgister(e){
      e.preventDefault();
    
     const data={
                name,
                email,
                whatsup,
                city,
                uf,
              };
 
    try{
        const response= await api.post('ongs', data);
        alert(`o seu id de acesso  ${response.data.id}`)
        history.push('/');
    }catch(err){
        alert(`o seu id de acesso esta incorreto `);
    } 
       
    }

return(
    <div className="register-container">
       <div className="content">
            <section>
            <img src={logoImg} alt="be the hero" />
             <h1>Cadastra-se</h1>
             <p>
                 handler functions called when the application receives a request to 
                 the specified route (endpoint) and HTTP method. 
             </p>
            <Link to="/">
                <FiLogIn size={18} color="#e02041" />voltar
             </Link>
      </section>
      
            <form onSubmit={HenderResgister}>
            <input placeholder="Nome da ong"
                    value={name}
                    onChange={e => setName(e.target.value)}

                    />
            <input type="email" placeholder="e-mail"
                    value={email}
                onChange={e => setEmail(e.target.value)}
            />
                <input placeholder="whatsup" 
                    value={whatsup}
                    onChange={e => setWhatsup(e.target.value)}
                     />
            <div className="input-group">
                <input placeholder="cidade" 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        /> 
                <input placeholder="uf" 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
            </div>
                <button className="btn btn-filter"  type="submit">entrar</button>

       </form>

    </div>

    
       </div>
     

);

}

export default Resgister;