/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../components/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const usePost = () => {

    const [ loading , setLoading ] = useState(false)
    const [ articulo , setArticulo ] = useState<any>(null)
    const { id } = useParams();
    const { user } = useContext(UserContext)

    useEffect( () => {
        
        handleGetPost()

    }, [user])

    const handleGetPost = async () => {

        try {

            setLoading(true)
            
            const { data } = await axios.get(`http://localhost:5246/Imagen/${id}`)

            const articulo1 = data.value.result
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setArticulo(articulo1)

            if( articulo1.status === 1 && articulo1.idUsuario !== user?.pkUsuario )
            {
                setArticulo(null)
            }

            setLoading(false)

            
        } catch (error) {
            setArticulo(null)
            setLoading(false)
        }

    }

  return {
    articulo,
    loading
  }
}

export default usePost