import React from "react";
import Image from "next/image";

const MovieCard: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
                src="https://via.placeholder.com/300x450"
                alt="Movie Poster"
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Movie Title</h2>
                <p className="text-gray-700 mb-4">Movie description goes here. It can be a brief summary of the movie plot.</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Watch Now
                </button>
            </div>
        </div>
    );
};

export default MovieCard;