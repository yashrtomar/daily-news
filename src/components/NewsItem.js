import React from 'react';
import noImage from '../assets/Image_not_available.png';
export default function NewsItem(props) {
    let { titleTooltip, title, description, descriptionTooltip, imageUrl, newsUrl, source, author, date } = props;
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {imageUrl ?
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageUrl} alt={imageUrl} /> :
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={noImage} alt="" />
                }
                <div className="p-6">
                    <h1 title={titleTooltip} className="title-font text-lg font-medium text-gray-900 mb-1 cursor-default">{title}...</h1>
                    <p className="leading-relaxed mb-4 cursor-default" title={descriptionTooltip}>{description}...</p>
                    <h3 className="title-font text-sm text-gray-400 mb-2 cursor-default">Source: {source}</h3>
                    <div className='cursor-default'>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 pb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-vector-pen text-gray-400" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                                <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
                            </svg>
                            <p className='pl-4'>{author}</p>
                        </span>
                    </div>
                    <div className='pt-1 pb-2 cursor-default'>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3 text-gray-400" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                            <p className='pl-4'>{new Date(date).toGMTString()}</p>
                        </span>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <a href={newsUrl} target="_blank" className="text-indigo-500 py-1 px-4 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:scale-105 duration-100 ease-in-out hover:rounded-full hover:outline outline-1 outline-indigo-500" rel="noopener noreferrer">Read More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}