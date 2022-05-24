import './App.css';
import { useState } from 'react';

function App() {
  
  const [returnedData, setReturnedData] = useState([]);
  const [user, setUser] = useState({Login:'', Password:'', UserLevel:'' });

  
  function setInput(e){
    const {name, value} = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  } 

  const fetchData = async() => {
    //brings info from the backend
    console.log(user);
    const newData = await fetch('/api', {
      method: 'POST',
      headers : {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        UserLevel: user.UserLevel,
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData)
  }

  const createUser = async() => {
    console.log(user);
    //sends info to the backend
    const newData = await fetch('/hello', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...user,
        
      })
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData);
  }

  function usersList(){
      
    console.log("usersList Called");
    let users = returnedData;
    

    for (let user in users){
      
      <div className='card'>
        <p>Id: {users[user].id}</p>
        <p>Nome de usuário: {users[user].login}</p>
        <p>Classificação Funcional: {users[user].userLevel}</p>
      </div>
    }
    
  }
 
  return (
    <div className="App">
      <input 
        type="text" name="Login" 
        placeholder="E-mail" 
        onChange={setInput}>
      </input>

      <input 
        type="password" 
        name="Password" 
        placeholder="Senha" 
        onChange={setInput}>  
      </input>

      <input 
        type="text" 
        name="UserLevel" 
        placeholder="Classificação funcional" 
        onChange={setInput}>
      </input>
      
      <button onClick={()=> fetchData()}>Envio ao servidor</button>
      <button onClick={()=> createUser()}>Criar um usuário</button>
      {console.log(usersList)}

      {returnedData.map((user) => {
          //renderiza todos os usuarios contidos na API
          return(
            <div className="users" key={user.id}>
              <div className='card'>
                <div>
                  ID: {user.id}
                  Username: {user.login}
                  Classe Funcional: {user.userLevel}
                </div>
              </div>
              
              
            </div>
          )
        })}
    </div>
    
  );
  
  
}



export default App;
