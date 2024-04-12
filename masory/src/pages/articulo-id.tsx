import NotFound from "../components/404"
import Loader from "../components/Loader"
import usePost from "../hooks/usePost"

const ArticuloPorId = () => {

    const { articulo , loading } = usePost()

    if( loading ) return (

        <div className="container max-w-[1100px] mx-auto py-8">
            <Loader/>
        </div>
    )
    return (
        <div className="container max-w-[1100px] mx-auto py-8">
            {/* header ends here */}
            {/* <pre> */}
                {/* {
                    JSON.stringify(articulo)
                }
            </pre> */}
            <main className={`mt-5 grid grid-cols-1 ${ articulo === null ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-4 min-h-[75vh]`}>
                {
                    articulo !== null
                    ?
                    <><div
                            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                        >
                            <div
                                className="absolute left-0 bottom-0 w-full z-10"
                                style={{
                                    backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
                                }} />
                            <img
                                src={articulo?.urlImagen}
                                className="w-full  z-0 object-cover rounded-lg" />

                        </div><div className="px-4 lg:px-0 w-full text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        {
                             articulo.status == 1 && <a
                             className="px-4 mr-4 py-1 block bg-red-600 text-gray-200 inline-flex items-center justify-center mb-2"
                         >
                             Privado
                         </a>
                        }
                                <div
                                    className="block px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                                >
                                    {articulo?.categoria}
                                </div>
                                <h2 className="text-4xl font-semibold text-black leading-tight mb-3">
                                    {articulo?.nombreImagen}
                                </h2>


                                <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                    {articulo?.descripcion}
                                </div>
                            </div></>
                :
                <NotFound/>
                }
            </main>
            {/* main ends here */}
            {/* footer */}
        </div>

    )
}

export default ArticuloPorId