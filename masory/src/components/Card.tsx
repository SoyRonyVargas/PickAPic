/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";


const Card = ({ imagen }: any) => {
    return (
        <Link to={`/articulo/${imagen.idImagen}`} className="bg-[#ddd] block rounded-lg shadow-md hover:shadow-lg card mb-5 p-3">
            <div className="flex flex-col">
                {/* {
                                    JSON.stringify( imagen )
                                } */}
                <img className="w-full rounded-lg overflow-hidden" loading="lazy" src={imagen?.urlImagen} />
                {/* <div className="text-gray-800 p-2">
                                    <div className="flex justify-between">
                                        <p className="text-md font-bold leading-6 ">The bird</p>
                                        <div className="flex items-center justify-between text-sm text-gray-500 space-x-1">
                                        </div>
                                    </div>
                                </div> */}
            </div>
        </Link>
    )
}

export default Card