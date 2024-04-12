import { Link } from 'react-router-dom';
import useAuthRegistro from '../hooks/useRegistro';

const RegistroPage = () => {
    // Utiliza el hook useAuthRegistro para manejar la autenticación
    const {
        nombre,
        email,
        password,
        error,
        loading,
        handleNombreChange,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    } = useAuthRegistro();

    return (
        <div className='container min-h-[100vh]'>
            <form className='max-w-[550px] bg-white border rounded border-gray-500/50 mt-10 p-3 500 mx-auto p=5' onSubmit={handleSubmit}>
                <div className='p-4'>
                    <h3 className='text-3xl font-bold mb-5'>Regístrate</h3>
                    <div className="w-full">
                        <div className="mb-5">
                            <label htmlFor="nombre" className="mb-3 block text-base font-semibold text-[#07074D]">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={handleNombreChange}
                                placeholder=""
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-semibold text-[#07074D]">
                                Correo
                            </label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder=""
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mb-5">
                            <label htmlFor="password" className="mb-3 block text-base font-semibold text-[#07074D]">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder=""
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    {error && <p className="text-red-500 font-bold mb-3">{error}</p>}
                    <button type='submit' disabled={loading} className={`w-full hover:shadow-form rounded-md bg-black ${loading ? 'opacity-50 cursor-not-allowed' : ''} py-3 px-8 text-center text-base font-semibold text-white outline-none`}>
                        {loading ? 'Cargando...' : 'Registrarse'}
                    </button>

                    <div className='mt-5'>
                        <Link to="/login" className='underline font-semibold'>
                            Iniciar Sesión
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistroPage;
