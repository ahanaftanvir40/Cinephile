import { useEffect, useState } from "react"
import { Cards } from "../components"
import { useFetch, useTitle } from "../hooks"
import { useSearchParams } from "react-router-dom"




export const Search = ({ apiPath }) => {
    const [searchParams] = useSearchParams()
    const queryTerm = searchParams.get("q");
    //console.log(queryTerm)
    const [page, setPage] = useState(1)
    const { data: movies } = useFetch(apiPath, page, queryTerm)
    const pageTitle = useTitle(`Search Result for '${queryTerm}'`)

    useEffect(() => {
        // Reset page number to 1 whenever the component is mounted or unmounted
        setPage(1);
        //setPrevPage(1);
    }, [apiPath]);

    const handleNextPage = () => {
        //setPrevPage(page)
        setPage(page + 1)
    }

    const handleBackPage = () => {
        if (page > 1) {
            setPage(page - 1)
            //setPrevPage(page - 1)
        }
    }



    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-600 dark:text-white">{movies.length === 0 ? `${queryTerm} Not Found` : `Results for '${queryTerm}' `}</p>
            </section>
            <section className="py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.map((movie) => (
                        <Cards key={movie.id} movie={movie} />
                    ))}







                </div>

                <button onClick={handleBackPage} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1 my-8 ">Back</button>
                <button onClick={handleNextPage} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1 my-8 ml-8">Next</button>

            </section>

        </main>
    )
}
