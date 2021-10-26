import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/dist/client/image";
import { forwardRef } from "react";

const Thumbnile = ({ result },ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image layout="responsive" src={ `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}` } alt="Movie poster" height={ 1080 } width={ 1920 } />
            <div className="p-2">
                <p className="truncate max-w-md">{ result.overview }</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in group-hover:font-bold">{ result.title || result.original_name }</h2>
                <p className="flex items-center uppercase text-gray-200 text-xs opacity-0 group-hover:opacity-100 transition delay-200 duration-500 ease-in">
                    <p className="text-yellow-300">{ result.media_type && `${result.media_type}` }</p>
                    <p className="px-1">{ " • " }{ result.release_date || `${result.first_air_date}` }{ " • " }</p>
                    <ThumbUpIcon className="h-5 text-blue-500" />
                    <p className="pl-1 text-white">{ result.vote_count }</p>
                </p>
            </div>
        </div>
    );
}

export default forwardRef(Thumbnile);