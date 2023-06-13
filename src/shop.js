import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
function Shop() {
  useEffect(function () {
    fetchItem();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItem = async () => {
    var api =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
    const data = await fetch(api);
    const item = await data.json();
    console.log(item.drinks);
    setItems(item.drinks);
  };
  return (
    <div>
      Shop Page
      <ul>
        {items.map((item) => {
          return (
            <li key={item.idDrink}>
              <Link to={`/shop/${item.idDrink}`}>{item.strDrink}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;
