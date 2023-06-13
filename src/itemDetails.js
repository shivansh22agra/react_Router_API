import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function ItemDetails({ props }) {
  let { id } = useParams();
  useEffect(function () {
    fetchItem();
    console.log(`__itemDetails ${id}`);
  }, []);
  const [items, setItems] = useState([]);
  const fetchItem = async () => {
    var api =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
    const data = await fetch(api);
    const item = await data.json();
    console.log(`item.drinks[i] ${item.drinks[0].idDrink}`);
    for (var i = 0; i < item.drinks.length; i++) {
      if (Number(`${item.drinks[i].idDrink}`) === Number(id)) {
        setItems(item.drinks[i]);
        console.log(`item.drinks[i++] ${item.drinks[i]}`);
      }
    }
  };
  return (
    <div>
      ItemDetails Page
      <ul>
        <li>{items.strDrink}</li>
      </ul>
    </div>
  );
}

export default ItemDetails;
