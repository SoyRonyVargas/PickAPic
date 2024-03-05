import { useEffect, useState } from 'react'

const useListado = () => {
    const [ isLoading , setLoading ] = useState(false)
    const [ images , setImages ] = useState([])

    useEffect( () => {

        handleGetImages()

    }, [])

    const handleGetImages = async () => {

        try
        {
            
            setLoading(true)

            const response = await fetch("http://localhost:5246/Imagen", {
                method: 'GET'
            })

            const data = await response.json()

            setImages(data.result)

            await new Promise(resolve => setTimeout(resolve, 2000));

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