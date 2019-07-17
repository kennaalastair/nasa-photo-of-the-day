import React, { useEffect, useState } from "react";
// import ApodCard from "./ApodCard.js";

const axios = require('axios');

export default function ApodGrid(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Iljplx6QAEN6gCcQhBm3u5H56waqJ4FP2piyTjUi`)
            .then(res => {
                const date = res.data.date,
                      title = res.data.title,
                      explanation = res.data.explanation,
                      url = res.data.url;  
                console.log(`NASA Apods api: ${date}, ${title}, ${explanation}, ${url}`);
                // KEY PART, SAVE TO STATE:
                setData(data);
            });
    }, [data]);

    return (
        <div className="apod-grid">
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.explanation}</p>

        </div>
    );
}