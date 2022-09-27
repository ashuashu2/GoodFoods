import React from "react";
import "./styles.css";
import { useState } from "react";

var foodDB = {
  Indian: [
    {
      name: "Matar Paneer",
      rating: "5/5",
      description:
        "Mattar paneer (Hindi: मटर पनीर), also known as matar paneer, muttar paneer, and mutter paneer is a modern restaurant style and vegetarian North Indian dish consisting of peas and paneer in a tomato based sauce, spiced with garam masala."
    },
    {
      name: "idli sambar",
      rating: "4.5/5",
      description:
        "Idli sambar is a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice."
    },
    {
      name: "Dhokla",
      rating: "3.5/5",
      description:
        "Dhokla is a vegetarian culinary dish that is native to the Indian state of Gujarat and parts of adjacent states. Although a Gujarati delicacy., it is also commonly served in other parts of India. It is made with a fermented batter derived from legumes like Chickpea, Pigeon pea and Urad and rice."
    }
  ],

  italian: [
    {
      name: "Pizza",
      rating: "3.5/5",
      description:
        "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot "
    },
    {
      name: "Lasagne",
      rating: "5/5",
      description:
        "Lasagne is a wide, flat sheet of pasta. Lasagna can refer to either the type of noodle or to the typical lasagna dish which is a dish made with several layers of lasagna sheets with sauce and other ingredients, such as meats and cheese, in between the lasagna noodles."
    },
    {
      name: "Gelato",
      rating: "4/5",
      description:
        "Gelato (Italian for “frozen”) is handmade from whole milk, sugar, and other flavourings, typically fruit, chocolate, and nuts. It uses high-quality, fresh ingredients. These ingredients slowly incorporate air as they are frozen, resulting in a thick, soft cream that is slow to melt."
    }
  ],
  chinese: [
    {
      name: "Chow Mein",
      rating: "3.5/5",
      description:
        "chow mein refers to fried noodles. More specifically, there are two main types of chow mein dishes: Steamed chow mein: In steamed chow mein, the noodles are initially flash-fried, then stir-fried while being tossed with additional ingredients like meat or vegetables and coated in a light sauce."
    },
    {
      name: "Momos",
      rating: "5/5",
      description:
        "Momo are bite-size dumplings made with a spoonful of stuffing wrapped in dough. Momo are usually steamed, though they are sometimes fried or steam-fried."
    },
    {
      name: "Spring Rolls.",
      rating: "4/5",
      description:
        " a cylindrical casing of rice paper, or sometimes wheat-and-egg dough, filled with a shredded mixture of vegetables and often meat or seafood, served fresh or deep-fried."
    }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("Indian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span></span>🍚GoodFoods{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
              <div style={{ fontSize: "smaller" }}> {food.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
