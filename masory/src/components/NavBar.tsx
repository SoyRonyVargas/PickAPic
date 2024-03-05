
const NavBar = () => {
  return (
    <nav className='bg-black p-4 py-6 text-white flex items-center'>
       <div className="container max-w-[1110px] mx-auto flex items-center justify-between">
        <ul className="flex items center m-0 gap-x-5 font-semibold">
                <li>
                    <a href="/">
                    Inicio
                    </a>
                </li>
                <li>
                    <a href="/crear">
                        Crear
                    </a>
                </li>
                <li>
                    <a href="/listado">
                        Listado
                    </a>
                </li>
            </ul>
            <p className="font-bold text-2xl">
                PickAPic
            </p>
       </div>
    </nav>
  )
}

export default NavBar