import React,{useState} from 'react';
import './global.css';
import Routers from './routes';
function App(){

  const [name, setName] = useState('');

  return (
    <Routers />
  );
}

export default App;
