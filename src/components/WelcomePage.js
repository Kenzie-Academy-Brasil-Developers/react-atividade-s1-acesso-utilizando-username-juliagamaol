const WelcomePage = (props) =>{
    const{usuario, setarEstaLogado} = props

    const HandleLogout = () =>{
        setarEstaLogado(false)
    }
    return(
        <div>
            <h1>Boas vindas, {usuario}</h1>
            <button onClick={HandleLogout}>Sair</button>
        </div>
    )
}


export default WelcomePage