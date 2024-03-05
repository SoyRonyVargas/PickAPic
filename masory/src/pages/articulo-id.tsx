import usePost from "../hooks/usePost"

const ArticuloPorId = () => {

    const { articulo } = usePost()

    return (
        <div className="container max-w-[1100px] mx-auto py-8">
            {/* header ends here */}
            {/* <pre> */}
                {/* {
                    JSON.stringify(articulo)
                }
            </pre> */}
            <main className="mt-5 grid grid-cols-2 gap-4">
                <div
                    className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                >
                    <div
                        className="absolute left-0 bottom-0 w-full z-10"
                        style={{
                            backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
                        }}
                    />
                    <img
                        src={articulo?.urlImagen}
                        className="absolute left-0 top-0 w-full  z-0 object-cover rounded-lg"
                    />
                    
                </div>
                <div className="px-4 lg:px-0 w-full text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        <a
                            href="#"
                            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                        >
                            {articulo?.categoria}
                        </a>
                        <h2 className="text-4xl font-semibold text-black leading-tight mb-3">
                            {articulo?.nombreImagen}
                        </h2>
                   
                   
                    <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                    {
                            articulo?.descripcion
                        }
                    </div>
                </div>
            </main>
            {/* main ends here */}
            {/* footer */}
            <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
                <div className="flex">
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
                        <ul>
                            <li>
                                {" "}
                                <a href="" className="block text-gray-600 py-2">
                                    Team
                                </a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a href="" className="block text-gray-600 py-2">
                                    About us
                                </a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a href="" className="block text-gray-600 py-2">
                                    Press
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
                        <ul>
                            <li>
                                {" "}
                                <a href="" className="block text-gray-600 py-2">
                                    Blog
                                </a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a href="" className="block text-gray-600 py-2">
                                    Privacy Policy
                                </a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a href="" className="block text-gray-600 py-2">
                                    Terms &amp; Conditions
                                </a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a href="" className="block text-gray-600 py-2">
                                    Documentation
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default ArticuloPorId