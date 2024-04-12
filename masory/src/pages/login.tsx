import { Link } from 'react-router-dom';
import useAuthLogin from '../hooks/useAuthLogin';

const Login = () => {
    const { email, password, error, loading, handleEmailChange, handlePasswordChange, handleSubmit } = useAuthLogin();

    return (
        <div className='container min-h-[100vh]'>
            <form onSubmit={handleSubmit} className='max-w-[550px] bg-white border rounded border-gray-500/50 mt-10 p-3 500 mx-auto p=5'>
                <div className='p-4'>
                    <h3 className='text-3xl font-bold mb-5'>Login</h3>
                    <div className="w-full">
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-semibold text-[#07074D]">
                                Correo
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
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
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder=""
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                    {error && <p className="text-red-500 font-bold mb-3">{error}</p>}
                    <button type='submit' disabled={loading} className={`w-full hover:shadow-form rounded-md bg-black ${loading ? 'opacity-50 cursor-not-allowed' : ''} py-3 px-8 text-center text-base font-semibold text-white outline-none`}>
                        {loading ? 'Cargando...' : 'Iniciar Sesión'}
                    </button>

                    <div className='mt-5'>
                        <Link to="/registro" className='underline font-semibold'>
                            Registrarse
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
