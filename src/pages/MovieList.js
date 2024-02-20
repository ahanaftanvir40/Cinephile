

import { useState, useEffect } from "react"
import { Cards } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useLocation } from "react-router-dom"
import { useTitle } from "../hooks"



export const MovieList = ({ apiPath, title }) => {
    const location = useLocation()
    const [page, setPage] = useState(1)
    //const [prevPage, setPrevPage] = useState(1)
    const { data: movies } = useFetch(apiPath, page)

    const pageTitle = useTitle(title)




    useEffect(() => {
        // Reset page number to 1 whenever the component is mounted or unmounted
        setPage(1);
        //setPrevPage(1);
    }, [location.pathname]);

    const handleNextPage = () => {
        //setPrevPage(page)
        setPage(page + 1)
        window.scrollTo(0, 0)
    }

    const handleBackPage = () => {
        if (page > 1) {
            setPage(page - 1)
            //setPrevPage(page - 1)
            window.scrollTo(0, 0)
        }
    }
    const handleBackToStart = () => {
        setPage(1)
        window.scrollTo(0, 0)
    }



    return (
        <main>
            <section className="py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.map((movie) => (
                        <Cards key={movie.id} movie={movie} />
                    ))}







                </div>


                <button onClick={handleBackPage} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1 my-8 ">Back</button>
                <button onClick={handleNextPage} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1 my-8 ml-8">Next</button>
                <button onClick={handleBackToStart} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1 my-8 ml-8">Back To Start</button>

            </section>

        </main>
    )
}
