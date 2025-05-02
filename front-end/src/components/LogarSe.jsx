
import { ChevronRight } from 'lucide-react'
import axios from 'axios'
function LogarSe() {
  async function HandleSubmit(event) {
    event.preventDefault()
      await axios.post("http://localhost:3000/usuario", {
        nink: document.querySelector("input[name=nink]").value,
        senha: document.querySelector('input[name=senha]').value
      })
        .then(resp => {
          console.log("logou: ", resp)
          window.location.href = "http://localhost:5173/DortFlex.html"
        })
        .catch(err => {
          console.error("erro ai: ", err)
        })
  }

    return(
    <div className="ConteinerInputs">
      <h1 className="titleC">Login</h1>
      <div className="">
        <form className='inputs' action="" method="post" onSubmit={HandleSubmit}>
          <input type="text" className="inpus" name='nink' id='nink'placeholder="Digite seu usuario.." />
          <input type="password" className="inpus" name='senha' placeholder="Digite sua senha.."/>
          <div className="linkL">
            <a href="index.html">ainda n é logado? </a>
            <button className="text-white w-9 h-9 border rounded-md ml-2 flex justify-center items-center text-9xl" type='submit'> <ChevronRight /></button>
          </div>
        </form>
      </div>
  </div>
    )
}

export default LogarSe;