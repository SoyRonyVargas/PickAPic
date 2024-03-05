/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "../components/Card"
import Loader from "../components/Loader"
import useImages from "../hooks/useImages"

const IndexPage = () => {

    const { images , isLoading } = useImages()
   
    return (
        <div className="">
            
            <header
                id="up"
                className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-[70vh] relative"
                style={{
                    backgroundImage: 'url(/hero.jpg)'
                }}
            >
                {/* Overlay Background + Center Control */}
                <div
                    className=" h-[70vh] bg-opacity-50 bg-black flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                >
                    <div className="mx-2 text-center">
                    <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                        Un lugar para exponer el arte <br />  y el pensar
                    </h2>
                    <div className="inline-flex mt-5">
                        <a href="/crear" className="p-2 px-8 my-5 mx-2 bg-blue-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent md:text-xl">
                        Crear Publicacion
                        </a>
                    </div>
                    </div>
                </div>
            </header>

            <div className="container max-w-[1100px] mx-auto py-8">
            <div className='flex items-center justify-between'>
                
                <h2 className='text-4xl font-semibold'>Ultimas Publicaciones</h2>

                <a href='/crear' className='p-2 px-8 bg-blue-700 rounded-lg text-white font-semibold'>
                    Crear Imagen
                </a>

            </div>
            <hr className='my-10' />
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> */}
            {
                !isLoading
                ?
                <div className="columns-4 gap-8 ">
                
                {
                    images.map( (imagen:any) => (
                        <Card
                            imagen={imagen}
                        />
                    ))
                }
            </div>
            : <Loader/>
            }
            </div>
        </div>
    )
}

export default IndexPage