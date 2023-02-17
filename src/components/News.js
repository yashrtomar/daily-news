import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {
    /* capitlizeFirstLetter = (string) => {
        let capital=string.charAt(0).toUpperCase() + string.slice(1);
        return capital;
    } */
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    document.title = props.category ? `${props.category} - Daily News` : `Daily News`;
    const updateNews = async () => {
        // setLoading(true); /*? */
        if (loading===true){
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        /*fetch api returns a promise so we can use async-await here so function will wait for promise to be resolved*/
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);}
    }
    useEffect(() => {
        updateNews();
    }, [updateNews]);
    /* const handlePreviousBtn = async () => {
        setPage(page - 1);
        updateNews();
    }
    const handleNextBtn = async () => {
        if ((page + 1) > Math.ceil((totalResults / props.pageSize))) {

        }
        else {
            setPage(page - 1);
            updateNews();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
                scroll to top logic
            })
        }
    } */
    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        /*fetch api returns a promise so we can use async-await here so function will wait for promise to be resolved*/
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        /*to calculate total articles in order to make next button disable logic work in case buttons are used instead of infinite scroll*/
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 ml-6">
                    <div className="w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 cursor-default">Daily News - Top Headlines{props.category ? ` on ${props.category}` : ``}</h1>
                        <div className="h-1 w-72 bg-indigo-500 rounded"></div>
                    </div>
                </div>

                <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<p className='text-center font-semibold text-lg'>Loading...</p>}>
                    <div className="flex flex-wrap">
                        {articles.map((element) => {
                            return (
                                <NewsItem
                                    key={element.url}
                                    titleTooltip={element?.title ? element?.title : ""}
                                    title={element.title ? element.title.slice(0, 50) : ""}
                                    /*using ternary operator (if-else condition shorthand) to handle NULL values in news api object, slice function won't work on NULL values*/
                                    description={element.description ? element.description.slice(0, 70) : ""}
                                    descriptionTooltip={element.description ? element.description : ""}
                                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                                    newsUrl={element.url}
                                    source={element.source.name}
                                    author={element.author ? element.author.slice(0, 15) : "unknown"}
                                    date={element.publishedAt}
                                />);
                        })}
                    </div>

                </InfiniteScroll>

            </div>
            {/* 
                
                Canceling buttons for infinite scroll

                <div className='inline-flex w-full items-center justify-center'>
                    <button type="button" disabled={page <= 1} className="w-20 h-20 inline-flex items-center justify-center rounded-full border-2 hover:border-4 border-indigo-500 text-indigo-500 mb-40 flex-shrink-0 cursor-pointer disabled:opacity-80 disabled:hover:scale-100 disabled:hover:border-2 disabled:cursor-default hover:scale-110 duration-100 ease-in-out" onClick={handlePreviousBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button>
                    <div className='w-5'></div>
                    <button type="button" disabled={((page + 1) > Math.ceil((totalResults / props.pageSize)))} className="nextBtn w-20 h-20 inline-flex items-center justify-center rounded-full border-2 hover:border-4 border-indigo-500 text-indigo-500 mb-40 flex-shrink-0 cursor-pointer disabled:opacity-80 disabled:hover:scale-100 disabled:hover:border-2 disabled:cursor-default hover:scale-110 duration-100 ease-in-out" onClick={handleNextBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button>
                </div> */}
        </section>
    );
}
News.defaultProps = {
    pageSize: 6,
    country: 'in',
    category: 'general'
};
News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
};