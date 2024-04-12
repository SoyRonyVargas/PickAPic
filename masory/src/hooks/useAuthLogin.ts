/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useState } from 'react';

const useAuthLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            // Hacer la llamada a la API para autenticar al usuario
            const response = await axios.post('http://localhost:5246/Usuario/login', {
                Nombre: '',
                Correo: email,
                Password: password
            });

            const usuario = response.data.result

            await new Promise(resolve => setTimeout(resolve, 1000));
            
            if( usuario == null )
            {
                setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
                setLoading(false);
                return
            }

            window.localStorage.setItem("usuario", JSON.stringify(usuario))

            window.location.href = '/'
            
        } catch (error) {
            setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
            console.error('Error de inicio de sesión:', error);
        }

        setLoading(false);
    };

    return {
        email,
        password,
        error,
        loading,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    };
};

export default useAuthLogin;
