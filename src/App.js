import React, { useState } from "react";

const App = () => {
  const [websites] = useState([
    {
      name: "SLV Travels",
      url: "https://jayakv5397.github.io/slv_travel_agency/",
      image: "./slv_travels.png",
    },
    {
      name: "Amigo Dental",
      url: "https://amigo-dental-clinic.netlify.app/",
      image: "./amigo.png",
    },
    {
      name: "Text Utility",
      url: "https://textutility-4x8p.onrender.com",
      image: "./textutility.png",
    },
    {
      name: "Keeper Notes",
      url: "https://keeper-6vz4.onrender.com",
      image: "./keepnotes.png",
    },
    {
      name: "Weather Api",
      url: "https://weather-app-duk7.onrender.com",
      image: "./weather.png",
    },
    {
      name: "Flyo",
      url: "https://jayakv5397.github.io/flyo/",
      image: "./flyo.png",
    },
    {
      name: "Simon Game",
      url: "https://jayakv5397.github.io/simonGame/",
      image: "./simon.png",
    },
  ]);

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Jaya's Portfolio</h1>
      <div class="container mt-5">
        <div class="row">
          {websites.map((site, index) => (
            <div class="col-md-3">
              <div
                class="card"
                style={{ width: "18rem", marginBottom: "2rem" }}
              >
                <img src={site.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-text">{site.name}</h5>
                  <a
                    href={site.url}
                    target="_blank"
                    style={{ textDecoration: "none", fontWeight: "bold" }}
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
