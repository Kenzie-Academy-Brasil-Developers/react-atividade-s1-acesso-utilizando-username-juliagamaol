import {useState} from 'react'

const GetUserComponent = (props) =>{
   const{setarUsuario, setarEstaLogado} = props
   const[usuarioInput, setarUsuarioInput] = useState('')

   function HandleLogin(usuarioInput){
        setarUsuario(usuarioInput)
        setarEstaLogado(true)
   }

   return(
        <form>
           <input
            type="text"
            placeholder="Insira seu nome"
            value={usuarioInput}
            onChange={(event) =>  setarUsuarioInput(event.target.value)}/>
            <button onClick={() => HandleLogin(usuarioInput)}>Acessar com o nome</button>
        </form>
   )
}

export default GetUserComponent