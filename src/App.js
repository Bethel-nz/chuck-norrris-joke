import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(res => {
          return res.json()
        }
        ).then((data) =>
          setJoke(data.value))
    }, 1000)
  }, []);

  const reloadScr=()=>{
    const rld = document.getElementById('button');

    rld.addEventListener('click',()=>{
      window.location.reload()
    })
  }

  return (
    <div className='App'>
      <div className='card-container'>
        <h1>Did you know</h1>
        <p>{joke}</p>

        <ion-icon name="refresh-outline" onClick={reloadScr} id='button'></ion-icon>
      </div>

    </div>
  );
}

export default App;
