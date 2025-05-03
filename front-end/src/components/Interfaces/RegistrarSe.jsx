function RegistrarSe() {
 return(
    <div className="ConteinerInputs">
      <h1 className="titleC">Cadastre-se</h1>
      <div className="inputs">
        <input type="text" className="inpus" placeholder="Crie seu usuario.." />
        <input type="password" className="inpus" placeholder="Crie sua senha.."/>
        <div className="linkL"><a href="login.html">Ja tem cadastro?</a></div>
      </div>
    </div>
 )
}

export default RegistrarSe;