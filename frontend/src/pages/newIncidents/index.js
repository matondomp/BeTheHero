import React,{useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'
import './style.css';
import heroImg from '../../esset/heroes.png';
import logoImg from '../../esset/logo.svg';
import api from '../../service/api';

function NewIncident() {

const [title,setTitle]=useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory();

const ongsId=localStorage.getItem('ongs');
  
async function cadastrar(e){
    e.preventDefault();
    
    
   const data={
       title,
       description,
       value,
   }

    const response = await api.post('/incidents',data,{
           headers:{
               Authorization:ongsId,
           }
       })
       history.push('/profile');
 console.log(response)
}
   
    return (

        <div className="new-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero" />
                    <h1>Cadastrar novo incidente</h1>
                    <p>
                        Se ainda não te cadastraste seja bem vindo na plataforma de volontarios para poderes ajudar alguem.
             </p>
                    <Link to="/profile">
                        <FiLogIn size={18} color="#e02041" />voltar
             </Link>
                </section>

                <form onSubmit={cadastrar}>
                    <input placeholder="titulo do caso"
                      value={title}
                        onChange={e =>setTitle(e.target.value)}
                    /> 
                    <textarea placeholder="descricao" value={description}
                        onChange={e =>setDescription(e.target.value)}>
                      
                    </textarea>
                    <input type="txt" placeholder="Valor" 
                        value={value}
                        onChange={e =>setValue(e.target.value)}
                    />
                   
                    
                    <button className="btn btn-filter" type="submit">New Incident</button>

                </form>

            </div>


        </div>


    );

}

export default NewIncident;