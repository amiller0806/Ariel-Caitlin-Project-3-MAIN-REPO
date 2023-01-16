import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import axios from "axios";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const MyFaves = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const [myFavedProducts, setMyFavedProducts] = useState([]);

  function getFaveProducts(favoriteProducts) {
    axios.get(`/me/${favoriteProducts}`).then((response) => {
      const myFavedProducts = response.data.filteredProducts;
      myFavedProducts.map((oneProduct) => console.log(oneProduct));
      console.log(myFavedProducts);
      const { _id, title, description } = myFavedProducts;
      setMyFavedProducts(myFavedProducts);
    });
  }

  return (
    <Card>
      <Card.Img alt="product bottle" />
      <Card.Body>
        <Card.Title>product title</Card.Title>
        <Card.Text>description</Card.Text>
        <Card.Text>price</Card.Text>
        <Button onClick={getFaveProducts}>test</Button>
      </Card.Body>
    </Card>
  );
};

export default MyFaves;
