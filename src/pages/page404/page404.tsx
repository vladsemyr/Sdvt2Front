import { useNavigate } from "react-router-dom";

function Page404() {
    const navigate = useNavigate();
    
    const onClick = () => {
        navigate("/");
    };
    
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">
                        Извините, мы не смогли найти эту страницу.
                    </p>
                    <p className="mt-4 mb-8 dark:text-gray-400">
                        ## ? страница находится в разработке ? ##
                    </p>
                    <button onClick={onClick} className="px-8 py-3 font-semibold rounded bg-blue-500 text-white dark:text-gray-900 md:w-1/2 whitespace-nowrap">
                        На главную страницу
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Page404;
