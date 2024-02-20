import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Backup from '../assets/noimage.png'
import { useTitle } from "../hooks"


export const MovieDetails = () => {
    const params = useParams()
    //console.log(params);
    const [movieDetails, setMovieDetails] = useState([])
    const image = movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : Backup
    const pageTitle = useTitle(movieDetails.title)

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ae261a8ab4750e7fba4133d9ab90d952`)
            const data = await response.json()
            setMovieDetails(data)
            //console.log(data);
        }
        fetchDetails()
    })


    return (
        <main>
            <section className="flex justify-around flex-wrap py-5">
                <div className="max-w-sm">
                    <img className="rounded" src={image} alt={movieDetails.title} />
                </div>
                <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
                    <h1 className="text-4xl font-bold text-center lg:text-left py-3">{movieDetails.title}</h1>
                    <p className="my-4">{movieDetails.overview}</p>

                    {movieDetails.genres ? (

                        <p className="my-7 flex flex-wrap gap-2">
                            {movieDetails.genres.map((genre) => (
                                <span className=" cursor-default mr-2 text-sm rounded-md border border-slate-500 dark:border-slate-300 p-2" key={genre.id} >{genre.name}</span>
                            ))}
                        </p>
                    ) : ""}



                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-2 text-lg font-bold text-gray-900 dark:text-white">{movieDetails.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-sm font-medium text-gray-900   dark:text-white">{movieDetails.vote_count} reviews</span>


                    </div>
                    <br></br>

                    <div name='release_date' className="flex">
                        <p>
                            <span className=" mr-2 font-bold">Release Date:</span>
                            <span className="text-lg">{movieDetails.release_date}</span>
                        </p>
                    </div>
                    <div name='runtime' className="flex">
                        <p>
                            <span className=" mr-2 font-bold">Runtime:</span>
                            <span className="text-lg">{movieDetails.runtime} min.</span>
                        </p>
                    </div>
                    <div name='revenue' className="flex">
                        <p>
                            <span className=" mr-2 font-bold">Revenue:</span>
                            <span className="text-lg">{movieDetails.revenue}</span>
                        </p>
                    </div>
                    <div name='IMDB' className="flex">
                        <p>
                            <span className=" mr-2 font-bold">IMDB:</span>
                            <a href={`https://www.imdb.com/title/${movieDetails.imdb_id}`} target="_blank" rel="noreferrer" className="text-lg hover:underline text-cyan-500">Link</a>
                        </p>
                    </div>





                </div>
            </section>
        </main >
    )
}
