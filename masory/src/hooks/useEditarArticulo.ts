/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const useEditarArticulo = <T>( initialForm : T ) => {
    
    const [ formState, setFormState ] = useState<T>( initialForm );
    const [ submited , setSubmited ] = useState<boolean>(false)
    const [ errors  ] = useState<{ [x:string]: string }>();
    const [ loading , setLoading ] = useState(false)
    const [images, setImages] = useState<any>([]);
    const { id } = useParams();

    const handleSubmit = async ( payload : any ) => {

        try {

            await axios.put("http://localhost:5246/Imagen/", {
                IdImagen: payload.idImagen,
                NombreImagen:payload.nombreImagen,
                Descripcion:payload.descripcion,
                Categoria: payload.categoria,
                status: Number(payload.status),
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

    useEffect( () => {
        
        handleGetPost()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleGetPost = async () => {

        try {

            setLoading(true)
            
            const { data } = await axios.get(`http://localhost:5246/Imagen/limpio/${id}`)
            
            setFormState(data.value.result)

            setImages([
                {
                    data_url: data.value.result.urlImagen
                }
            ])

            setLoading(false)

            
        } catch (error) {
            setLoading(false)
        }

    } 
    // useEffect( () => {

    //     // setFormState(initialForm)

    // }, [initialForm])

    useEffect( () => {

        return () => {
            setSubmited(false)
        }

    }, [])

    const isFormValid = useMemo( () => {

        if( !errors ) return false

        for( const field of Object.keys(errors!) )
        {
            if( errors[field as keyof typeof errors] !== null ) return false
        }

        return true

    } , [errors])

    const onInputChange = ({ target } : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // const handleInputDateChange: FormDatePicker = (date, name) => {

    //     setFormState({
    //         ...formState,
    //         [name]: date
    //     })

    // }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const handleSubmitForm = ( event : React.FormEvent<HTMLFormElement> ) => {

        event.preventDefault()

        handleSubmitedForm()
 
        // if( !isFormValid ) return
        
        handleSubmit(formState)

        setSubmited(false)
        
    }

    const handleSubmitedForm = () => setSubmited(true)

    return {
        // ...formState,
        images,
        errors,
        loading,
        submited,
        formState,
        setImages,
        onResetForm,
        isFormValid,
        setFormState,
        onInputChange,
        handleSubmitForm,
        handleSubmitedForm,
        // handleInputDateChange
    }
}

export default useEditarArticulo