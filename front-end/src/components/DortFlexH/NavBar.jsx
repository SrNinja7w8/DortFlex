function NavBar() {
    return (
            <nav className="h-20 w-screen bg-red-700 flex items-center  text-xl">
                <div className="flex w-6/12 justify-around items-center h-20">
                   <a href=""><strong>Home</strong></a>
                   <a href=""><strong>Procurar</strong></a>
                   <a href=""><strong>Grupos</strong></a>
                   <a href=""><strong>Comunidade</strong></a>
                </div>
                <div className=" w-screen flex h-20 items-center justify-end">
                    <h1 className="font-minha-bl text-slate-100">D o r t F l e x</h1>
                    <div className="w-10 h-10 mr-5 ml-5 flex flex-col justify-around">
                        <div className="bg-black  w-10 h-2 rounded-md"></div>
                        <div className="bg-black w-10 h-2 rounded-md"></div>
                        <div className="bg-black w-10 h-2 rounded-md"></div>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar