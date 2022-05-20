import './App.css';
import { useState } from 'react';

function App() {
  
  const [returnedData, setReturnedData] = useState(['hiiii, there!']);

  const getData = async(url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type':'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnedData(newData.result)
  }

  return (
    <div className="App">
      <button onClick={()=> getData('/quit')}>Click</button>
      {returnedData}
    </div>
  );
}

export default App;
