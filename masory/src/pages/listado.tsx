/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import useListado from "../hooks/useListado"
import axios from 'axios'
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useContext, useEffect, useLayoutEffect } from "react";
import { UserContext } from "../components/AuthContext";

const ListadoPage = () => {

    const { images, isLoading } = useListado()
    const { user } = useContext(UserContext)

    useLayoutEffect( () => {

        if( user === null )
        {
            window.location.href = '/login'    
        }

    }, [])
    useEffect( () => {

        if( user === null )
        {
            window.location.href = '/login'    
        }

    }, [])

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
        <section className="container max-w-[1100px] mx-auto py-8 min-h-[100vh]">

            <h2 className="text-3xl font-bold">Publicaciones</h2>

            <hr className="my-5" />

            <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="relative overflow-x-auto">
               {
                    !isLoading
                    ?
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-white-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
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
                                Status
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
                            images?.map( (imagen:any) => (
                                <tr className="bg-white border-b text-black">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-black"
                                    >
                                        {
                                            imagen.idImagen
                                        }
                                    </th>
                                    <th
                                        scope="row"
                                        className="max-w-[200px] px-6 py-4 font-medium text-gray-900 text-black"
                                    >
<p>
{
                                            imagen.nombreImagen
                                        }
</p>
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
                                            imagen.status == 0
                                            ?
                                            <span className="bg-green-500 font-semibold p-2 px-3 text-white  rounded-lg"> 
                                            Publico
                                             </span>
                                        :
                                        <span className="bg-red-500 font-semibold p-2 px-3 text-white rounded-lg"> 
                                            Privado
                                        </span>
                                        }
                                      
                                    </td>
                                    <td className="px-6 py-4">
                                    {
                                            handleFormat(imagen.fechaCarga)
                                        }
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <button onClick={ () => handleDelete(imagen.idImagen)} className="block mb-3 p-2 px-5 mr-3 bg-red-500 rounded-lg text-white font-semibold">
                                        Eliminar
                                        </button>
                                        <Link to={`/listado/edit/${imagen.idImagen}`} className="block mb-3 text-center p-2 mr-3 px-5 bg-yellow-500 rounded-lg text-black font-semibold">
                                              Editar
                                        </Link>
                                        <a href={`/articulo/${imagen.idImagen}`} className="py-2 text-center px-3 block bg-blue-500 rounded-lg text-white font-semibold">
                                            Ver
                                        </a>
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