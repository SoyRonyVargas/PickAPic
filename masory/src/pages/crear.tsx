/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageUploading from 'react-images-uploading';
import React, { useEffect, useLayoutEffect } from 'react'
import { useForm } from '../hooks/useForm';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useUser } from '../components/AuthContext';

const CrearPage = () => {

    const initialState = {
        nombre: '',
        descripcion: '',
        ArchivoImagen: null,
        categoria: ''
    }
    const [images, setImages] = React.useState<any>([]);
    const { user } = useUser()

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
    const handleSubmit = async ( payload : any ) => {

        try {

            if( payload.nombre.trim().length === 0 )
            {
                return await Swal.fire({
                    title: 'Ingresa un nombre valido',
                    icon: 'error',
                })
            }
            
            if( payload.descripcion.trim().length === 0 )
            {
                return await Swal.fire({
                    title: 'Ingresa una descripcion valida',
                    icon: 'error',
                })
            }
            
            if( payload.categoria.trim().length === 0 )
            {
                return await Swal.fire({
                    title: 'Ingresa una categoria valida',
                    icon: 'error',
                })
            }
           
            if( images.length === 0 )
            {
                return await Swal.fire({
                    title: 'Ingresa al menos una imagen' ,
                    icon: 'error',
                })
            }
            
            const formData = new FormData();
            
            formData.append('ArchivoImagen', images[0].file);

            const { data } = await axios.post("http://localhost:5246/Imagen/Upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Importante para enviar archivos
                  },
            })

            const filePath = `http://localhost:5246/uploads/${data.fileName}`

            await axios.post("http://localhost:5246/Imagen/", {
                NombreImagen:payload.nombre,
                Descripcion:payload.descripcion,
                UrlImagen:filePath,
                Categoria: payload.categoria,
                IdUsuario: user?.pkUsuario ?? 0
            })

            await Swal.fire({
                title: 'Publicacion creada correctamente',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            window.location.href = "/listado"

        } catch (error) {
            console.log();
            
        }

    }

    const { handleSubmitForm , onInputChange, formState } = useForm(initialState , [] , handleSubmit )

    const maxNumber = 69;

    const onChange = (imageList:any, addUpdateIndex:any) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    return (
        <div className="container max-w-[1100px] mx-auto py-8 min-h-[100vh]">

        <div className="mx-auto flex items-center justify-center p-12 bg-white block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow">
            {/* Author: FormBold Team */}
            {/* Learn More: https://formbold.com */}

            {/* <pre>
                {
                    JSON.stringify( formState , null , 3 )
                }
            </pre> */}
            <div className="mx-auto w-full max-w-[550px]">

                <h2 className="font-bold text-3xl">Crear tu articulo</h2>

                <hr className="my-5" />

                <form onSubmit={handleSubmitForm}>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="fName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Titulo
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    onChange={onInputChange}
                                    value={formState.nombre}
                                    placeholder=""
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="lName"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Descripcion
                                </label>
                                <textarea
                                    name="descripcion"
                                    placeholder=""
                                    onChange={onInputChange}
                                    value={formState.descripcion}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="guest"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Imagen
                        </label>
                        {/* <input
                            type="number"
                            name="guest"
                            id="guest"
                            min={0}
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        /> */}
                         <ImageUploading
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                            imageList,
                            onImageUpload,
                            // onImageRemoveAll,
                            // onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <button
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    type='button'
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                > 
                                Seleccionar Imagen
                                </button>
                                &nbsp;
                                {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                                {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                    {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                                    <button onClick={() => onImageRemove(index)}>Eliminar</button>
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                        </ImageUploading>
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 ">
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Categoria
                                </label>
                                <input
                                     onChange={onInputChange}
                                     value={formState.categoria}
                                    type="text"
                                    name="categoria"
                                    id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className="w-full hover:shadow-form rounded-md bg-black 6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>

    )
}

export default CrearPage