import { Menu } from "lucide-react"
import { useState  } from "react"
function NavBar() {
    const [ativo, setAtivo] = useState(false)
    function Side() {
        setAtivo(!ativo)
    }
    return (
        
            <nav className="h-20 w-screen bg-red-700 flex items-center  text-xl">
                <div className="flex w-6/12 justify-around items-center h-20">
                   <a className='hover:border-b-2' href=""><strong>Home</strong></a>
                   <a className='hover:border-b-2' href=""><strong>Procurar</strong></a>
                   <a className='hover:border-b-2' href=""><strong>Grupos</strong></a>
                   <a className='hover:border-b-2' href=""><strong>Comunidade</strong></a>
                   <div className={`w-20 h-20 ${ativo ? 'bg-pink-500' : 'bg-slate-500'} cursor-pointer`} >{ativo}</div>
                </div>
                <div className=" w-screen flex h-20 items-center justify-end">
                    <h1 className="font-minha-bl text-slate-100">D o r t F l e x</h1>
                    <div className="w-10 ml-5 flex" onClick={Side}>
                        <Menu className="-translate-x-3 w-16 h-60"/>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar