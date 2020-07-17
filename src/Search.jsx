import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [breedList, setBreedList] = useState([]);

  const get = (breed) => {
    axios
      .get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`)
      .then((response) => {
        console.log(response.data);
        setBreedList(response.data);
      });
  };

  const search = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    get(e.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={search} />
      {breedList.map((breed, index) => {
        return (
          <div>
            <p>Name: {`${breed.name}`}</p>
            <p>Bred for: {`${breed.bred_for}`}</p>
            <p>
              Height:{" "}
              {`${breed.height.imperial} in. / ${breed.height.metric} cm.`}
            </p>
            <p>Life Span: {`${breed.life_span}`}</p>
            <p>Temperament: {`${breed.temperament}`}</p>
            <p>Life Span: {`${breed.life_span}`}</p>
            <p>
              Weight:{" "}
              {`${breed.weight.imperial} lb. / ${breed.height.metric} kg.`}
            </p>
          </div>
        );
      })}
    </>
  );
}
