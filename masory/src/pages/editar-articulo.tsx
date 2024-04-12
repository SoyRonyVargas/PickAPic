/* eslint-disable @typescript-eslint/no-explicit-any */
import useEditarArticulo from "../hooks/useEditarArticulo";
import ImageUploading from 'react-images-uploading';

const EditarArticulo = () => {

    const initialState = {
        nombreImagen: '',
        descripcion: '',
        ArchivoImagen: null,
        categoria: '',
        status: 0
    }
   
    const { handleSubmitForm , onInputChange, formState , setImages , images } = useEditarArticulo(initialState)
    
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

            <h2 className="font-bold text-3xl">Edita tu articulo</h2>

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
                                name="nombreImagen"
                                onChange={onInputChange}
                                value={formState.nombreImagen}
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
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
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
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                        <div className="mb-5">
                            <label
                                htmlFor="date"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Status 
                            </label>
                            <select 
                                onChange={onInputChange}
                                value={formState.status} 
                                name="status"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            >
                                <option value={0}>Activo</option>
                                <option value={1}>Inactivo</option>
                            </select>
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
                        // onImageRemoveAll,
                        // onImageUpdate,
                        }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                            {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} />
                                <div className="image-item__btn-wrapper">
                                {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                                </div>
                            </div>
                            ))}
                        </div>
                        )}
                    </ImageUploading>
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

export default EditarArticulo