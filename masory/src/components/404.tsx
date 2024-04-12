
const NotFound = () => {
    return (
        <div>
            <img
                src="/404.svg"
                alt=""
                className="mx-auto max-w-[900px] h-[300px]"
            />
            <h1 className="text-5xl text-center font-bold mt-5">Articulo no disponible</h1>

            <div className="flex justify-center mt-5 mx-auto">
                <a href="/" className="mx-auto p-2 px-8 my-5 mx-2 bg-blue-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent md:text-xl">
                    Ver Publicaciones
                </a>
            </div>
        </div>
    )
}

export default NotFound