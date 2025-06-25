import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; // For reading query params from URL
import NewsItem from "../Components/NewsItem"; // Custom component for displaying individual news
import InfiniteScroll from "react-infinite-scroll-component"; // Library for infinite scroll

function Home() {
  // News articles state
  const [articles, setArticles] = useState([]);

  // Current page number for pagination
  const [page, setPage] = useState(1);

  // Total number of results returned from API
  const [totalResults, setTotalResults] = useState(0);

  // Search query and language state
  const [q, setQ] = useState("All");
  const [language, setLanguage] = useState("hi");

  // Get search params (q and language) from URL
  const [searchParams] = useSearchParams();

  // Update query and language when URL searchParams change
  useEffect(() => {
    setQ(searchParams.get("q") ?? "All");
    setLanguage(searchParams.get("language") ?? "hi");
    setPage(1); // reset page when filter changes
  }, [searchParams]);

  // Fetch news data when q or language changes
  useEffect(() => {
    const getAPIData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=1&sortBy=publishedAt&language=${language}&apiKey=6ae0be66976943ac9fa7c3b235ad6414`
      );
      const data = await response.json();
      if (data.status === "ok") {
        setArticles(data.articles); // replace with new articles
        setTotalResults(data.totalResults);
      }
    };

    getAPIData();
  }, [q, language]);

  // Fetch more articles when scrolling
  const fetchData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=${nextPage}&sortBy=publishedAt&language=${language}&apiKey=6ae0be66976943ac9fa7c3b235ad6414`
    );
    const data = await response.json();
    if (data.status === "ok") {
      // Append new articles to existing list
      setArticles(prev => prev.concat(data.articles));
    }
  };

  return (
    <div className="container-fluid my-2">
      {/* Heading */}
      <h5 className="background text-center p-2 text-light">{q} Articles</h5>

      {/* Infinite Scroll Container */}
      <InfiniteScroll
        dataLength={articles.length}           // current data length
        next={fetchData}                       // function to fetch more
        hasMore={articles.length < totalResults} // keep fetching until all are loaded
        loader={<h4>Loading...</h4>}           // loader text
      >
        <div className="row">
          {
            // Loop through articles and render NewsItem component
            articles.map((item, index) => (
              <NewsItem
                key={index}
                source={item.source.name}
                title={item.title}
                description={item.description}
                url={item.url}
                // Use default image if none found
                pic={item.urlToImage ?? "/images/imagenotfound.jpg"}
                date={item.publishedAt}
              />
            ))
          }
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Home;
