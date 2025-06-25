import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Navbar() {
  // State for search input
  let [search, setSearch] = useState("");
  // State for current query and language from URL
  let [q, setQ] = useState("");
  let [language, setLanguage] = useState("");

  // Hooks for URL search params and navigation
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  // Handle search form submission
  function postSearch(e) {
    e.preventDefault();
    // Navigate to new URL with search and language params
    navigate(`/?q=${search}&language=${language}`);
    setSearch(""); // Clear search input after submit
  }

  // Update q and language states when URL search params change
  useEffect(() => {
    setQ(searchParams.get("q") ?? "All");
    setLanguage(searchParams.get("language") ?? "hi");
  }, [searchParams]);

  return (
    <nav className="navbar navbar-expand-lg background sticky-top">
      <div className="container-fluid">
        {/* Brand link */}
        <Link
          className="navbar-brand text-light font-bold"
          to={`/?q=All&language=${language}`}
        >
          NewsApp
        </Link>
        {/* Navbar toggler for mobile view */}
        <button
          className="navbar-toggler border-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined text-light fs-1">
            Menu
          </span>
        </button>
        {/* Navbar links and search form */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Main category links */}
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${q === "All" ? "active" : ""}`}
                aria-current="page"
                to={`/?q=All&language=${language}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${q === "Politics" ? "active" : ""}`}
                to={`/?q=Politics&language=${language}`}
              >
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${q === "Crime" ? "active" : ""}`}
                to={`/?q=Crime&language=${language}`}
              >
                Crime
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${q === "Education" ? "active" : ""}`}
                to={`/?q=Education&language=${language}`}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${q === "Science" ? "active" : ""}`}
                to={`/?q=Science&language=${language}`}
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${q === "Technology" ? "active" : ""}`}
                to={`/?q=Technology&language=${language}`}
              >
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${q === "Sports" ? "active" : ""}`}
                to={`/?q=Sports&language=${language}`}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-light ${q === "Cricket" ? "active" : ""}`}
                to={`/?q=Cricket&language=${language}`}
              >
                Cricket
              </Link>
            </li>
            {/* Dropdown for other categories */}
            <li className="nav-item dropdown">
              <a
                className="nav-link text-light dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Others
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/?q=Economics&language=${language}`}
                  >
                    Economics
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/?q=World&language=${language}`}
                  >
                    World
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/?q=India&language=${language}`}
                  >
                    India
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/?q=Jokes&language=${language}`}
                  >
                    Jokes
                  </Link>
                </li>
              </ul>
            </li>
            {/* Dropdown for language selection */}
            <li className="nav-item dropdown">
              <a
                className="nav-link text-light dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={`/?q=${q}&language=hi`}>
                    Hindi
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/?q=${q}&language=en`}>
                    English
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* Search form */}
          <form className="d-flex" role="search" onSubmit={postSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar