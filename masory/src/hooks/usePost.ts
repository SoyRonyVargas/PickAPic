/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const usePost = () => {

    const [ loading , setLoading ] = useState(false)
    const [ articulo , setArticulo ] = useState<any>(null)
    const { id } = useParams();

    useEffect( () => {
        
        handleGetPost()

    }, [])

    const handleGetPost = async () => {

        try {

            setLoading(true)
            
            const { data } = await axios.get(`http://localhost:5246/Imagen/${id}`)

            setArticulo(data.value.result)

            setLoading(false)

            
        } catch (error) {
            setLoading(false)
        }

    }

  return {
    articulo,
    loading
  }
}

export default usePost