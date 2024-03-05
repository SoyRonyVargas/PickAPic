/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import useListado from "../hooks/useListado"
import axios from 'axios'
import Loader from "../components/Loader";

const ListadoPage = () => {

    const { images, isLoading } = useListado()

    const handleFormat = ( fechaRecive:string ) => {

          // Crear un objeto de fecha
        const fecha = new Date(fechaRecive);

         // Formatear la fecha
  const opcionesFecha: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada: string = fecha.toLocaleDateString('es-ES', opcionesFecha);

        return fechaFormateada
    }

    const handleDelete = async ( id: string ) => {

        try {
            
            const { isConfirmed } = await Swal.fire({
                title: "¿Seguro que deseas eliminar la publicacion?",
                showCancelButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: `Cancelar`
            })

            if( !isConfirmed ) return 

            await axios.delete(`http://localhost:5246/Imagen/${id}`)
            
            await Swal.fire({
                title: "Articulo eliminado",
                icon: "success"
            })

            window.location.reload()


        } catch (error) {
            console.log(error);
            await Swal.fire({
                title: "Error al eliminarlo",
                icon: "error"
            })
        }

    }

    return (
        <section className="container max-w-[1100px] mx-auto py-8">

            <h2 className="text-3xl font-bold">Publicaciones</h2>

            <hr className="my-5" />

            <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="relative overflow-x-auto">
               {
                    !isLoading
                    ?
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-white-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Titulo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripcion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categoria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Likes
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Creado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Accion
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            images.map( (imagen:any) => (
                                <tr className="bg-white border-b text-black">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-black"
                                    >
                                        {
                                            imagen.nombreImagen
                                        }
                                    </th>
                                    <td className="px-6 py-4">
                                    {
                                            imagen.descripcion
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                    {
                                            imagen.categoria
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                    {
                                            imagen.likes
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                    {
                                            handleFormat(imagen.fechaCarga)
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={ () => handleDelete(imagen.idImagen)} className="p-3 px-8 bg-red-500 rounded-lg text-white font-semibold">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                :<Loader/>
               }
            </div>

        </div>
        </section>
    )
}

export default ListadoPage