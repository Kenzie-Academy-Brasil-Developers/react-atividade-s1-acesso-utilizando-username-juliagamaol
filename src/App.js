import './App.css';
import {useState} from 'react'
import WelcomePage from './components/WelcomePage';
import GetUserComponent from './components/GetUserComponent'
function App() {
  const[estaLogado, setarEstaLogado] = useState(false)
  const[user, setUser] = useState('')
  return (
    <div className="App">
      <header className="App-header">
          {estaLogado ? <WelcomePage
          usuario={user} setarEstaLogado={setarEstaLogado}/>
          : <GetUserComponent setarUsuario={setUser} setarEstaLogado={setarEstaLogado}/>}
      </header>
    </div>
  );
}

export default App;
