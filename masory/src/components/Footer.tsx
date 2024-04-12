
const Footer = () => {
  return (
    <footer className="py-8 p-5 bg-black text-white mt-5">
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
    </footer>
  )
}

export default Footer