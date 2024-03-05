import { useEffect, useState } from 'react'

const useImages = () => {

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

            setLoading(false)
        }
        catch
        {
            setLoading(false)
        }

    }

  return {
    isLoading,
    images
  }
}

export default useImages