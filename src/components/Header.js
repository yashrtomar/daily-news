import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
            <header className="sticky top-0 z-10 bg-white bg-opacity-80 backdrop-blur-xl text-gray-600 body-font border-b-2">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src='./daily-news.jpg' alt='Daily-News' width={35} height={35} className="pt-1" />
                        {/* in react, you gotta need to specify both height and width, its not enough to specify one of them it does not take it automatically */}
                        <span className="ml-3 text-xl">Daily News</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        {/* <Link to='/' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">Home</Link> */}
                        <Link to='/general' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">General</Link>
                        <Link to='/business' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">Business</Link>
                        <Link to='/entertainment' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">Entertainment</Link>
                        <Link to='/health' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">Health</Link>
                        <Link to='/science' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">Science</Link>
                        <Link to='/sports' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">Sports</Link>
                        <Link to='/technology' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">Technology</Link>
                        <Link to='/about' className="mr-5 hover:scale-110 duration-100 ease-in-out text-gray-900">About</Link>
                    </nav>
                    <button className="border-0 py-1 px-3 mt-4 md:mt-0 hover:scale-125 duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>
            </header>
    );
}