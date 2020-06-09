import React,{Component} from 'react'
import {link} from 'react-router-dom' 
import './style.css'
import {FiTrash2,FiFacebook,FiTwitter,FiGitBranch,FiPower} from 'react-icons/fi'

import { IoMdRadioButtonOn } from 'react-icons/io'
import img from '../../esset/logo.svg'
import api from '../../service/api'

class controlAdim extends Component {

    state={
      list:[] 
      
    }
   
    componentDidMount(){
        this.ListOngCase();
    }

    ListOngCase=()=>{
      
        api.get('/ongs')
        .then(response=>{
           this.setState({
               list:response.data.list,
               
           })
          
        })

  
     
    }
   
  
render(){
    return (
        <div className="controlAdim">
          <div>
               <header>
                <img src={img} alt="" />

                <ul>
                    <li></li>
                    <li>profile</li>
                    <li>logado</li>
                </ul>
                <a href=""> <IoMdRadioButtonOn size={20}
                    color="green"
                /> logado</a>
                <a href="#">

                    <FiPower size={20} color="red" />
                </a>
            </header>
            <section>
                <h1>Hello adim</h1>
                <main>
                    
                         <ul>
                        {this.state.list.map(response=>(
                       
                          <li key={response.id} > 
                          
                        <p><strong>Id:</strong>
                        {response.id}</p>
                        
                         <p> <strong>Nome:</strong>
                         {response.name}</p>
                            
                        <p><strong>email:</strong>
                        {response.email}</p>
                                
                        <p><strong>Whatsapp:</strong>     
                        {response.whatsup}</p>
                            
                        <p><strong>cidade:</strong>
                        {response.city}</p>
                           
                        <p> <strong>UF:</strong>
                        {response.uf}</p>
                                <a href="#" >
                        <FiTrash2 size={18} color="red" /></a> 
                        </li>
                        ))}
                          </ul>                
                                  
                    

                </main>
            
            </section>
         <footer>
                <p>contacta-nos e estaremos prontos pra ajudar</p>
                <div>
                    <span><a href="">
                        <FiFacebook size={30} color="blue" /></a></span>
                    <span><a href="">
                        <FiGitBranch size={30} color="black" /></a></span>
                    <span><a href="">
                        <FiTwitter size={30} color="rgb(72, 136, 255)" /></a></span>
                </div>
            </footer>
           
          </div>
           
        </div>

);
}




}

export default controlAdim;