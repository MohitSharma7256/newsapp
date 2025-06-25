import React from "react";

function NewsItem(props) {
  return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
        <div className="card">
          <img src={props.pic} height={200} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="source">
                <p>{props.source}</p>
                <p>{new Date(props.date).toLocaleString()}</p>
            </div>
            <p className="card-text">
              {props.description}
            </p>
            {/* Corrected the anchor href to use props.url instead of NewsItem.url */}
            <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 background">
              Read Full Articles
            </a>
          </div>
        </div>
      </div>
  );
}

export default NewsItem;