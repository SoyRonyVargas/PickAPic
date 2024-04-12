import { useUser } from "./AuthContext"

const NavBar = () => {

    const { user } = useUser()

    const handleLogout = () => {

        window.localStorage.clear()

        window.location.href = ''
        
    }
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
                    <li>
                        {
                            user != null
                            ?
                            <p>
                                Hola, { user.nombre }
                            </p>
                            :
                            <a href="/login">
                                Iniciar Sesion
                            </a>
                        }
                    </li>
                    {
                            user != null
                            &&
                            <li>
                                <a onClick={handleLogout} href="">Salir</a>
                            </li>
                        }
                    
                </ul>
                <p className="font-bold text-2xl">
                    PickAPic
                </p>
            </div>
        </nav>
    )
}

export default NavBar