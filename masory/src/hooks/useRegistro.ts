/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const useAuthRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleNombreChange = (e:any) => {
        setNombre(e.target.value);
    };

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
            // Hacer la llamada a la API para registrar al usuario
            const response = await axios.post('http://localhost:5246/Usuario/registro', {
                Nombre:nombre,
                Correo: email,
                Password: password
            });

            // Si la respuesta indica éxito, puedes redirigir al usuario a la página de inicio de sesión
            // history.push('/login');

            // Ejemplo de cómo podrías manejar la respuesta
            const data = response.data.result;

            await new Promise(resolve => setTimeout(resolve, 1000));

            if( data === null )
            {
                setError('Usuario ya existente');
                setLoading(false);
                return
            }

            await Swal.fire({
                title: 'Registrado correctamente',
                icon: "success"
            })

            window.location.href = '/login'

            // Aquí puedes agregar lógica adicional según la respuesta del servidor

        } catch (error) {
            setError('Hubo un error al registrar al usuario. Por favor, intenta nuevamente.');
            console.error('Error al registrar usuario:', error);
        }

        setLoading(false);
    };

    return {
        nombre,
        email,
        password,
        error,
        loading,
        handleNombreChange,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    };
};

export default useAuthRegistro;
