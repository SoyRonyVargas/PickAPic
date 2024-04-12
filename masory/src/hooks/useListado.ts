/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useUser } from '../components/AuthContext'

const useListado = () => {
    const [ isLoading , setLoading ] = useState(false)
    const [ images , setImages ] = useState([])
    const { user } = useUser()

    useEffect( () => {

        handleGetImages()

    }, [user])

    const handleGetImages = async () => {

        try
        {
            
            setLoading(true)

            const response = await fetch(`http://localhost:5246/Imagen/listado_usuario/${user?.pkUsuario}`, {
                method: 'GET'
            })

            const data = await response.json()

            setImages(data.result)

            await new Promise(resolve => setTimeout(resolve, 1000));

            setLoading(false)
        }
        catch
        {
            setLoading(false)
        }

    }

    return {
        images,
        isLoading
    }
}

export default useListado